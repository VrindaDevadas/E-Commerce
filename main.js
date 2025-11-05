/*to show the products carousel */

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('#explore-carousel');
    const homepageProducts = products.slice(0, 4);

    let carouselHTML = '';
    homepageProducts.forEach(product => {
        carouselHTML += createProductCard(product);
    });

    carouselContainer.innerHTML = carouselHTML;



    const bagIcon = document.querySelector('a[href="bag"]');
    const closeCartButton = document.getElementById('close-cart-button');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    let cart = [];

    function openCart() {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
    }

    function closeCart() {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
    }


    bagIcon.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });

    closeCartButton.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);


    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const productCard = event.target.closest('.product-card');
            const productId = parseInt(productCard.dataset.productId);
            const product = products.find(p => p.id === productId);

            if (product) {
                addToCart(product);
            }
        }
    });

    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        renderCart();
        openCart();
    }


    function renderCart() {
        const cartItemsContainer = document.querySelector('.cart-items-contianer');
        const cartHeader = document.querySelector('.cart-header h3 span');

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your bag is empty.</p>';
            cartHeader.textContent = '[0]';
            return;
        }

        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <p class="cart-item-title">${item.name}</p>
                    <p class="cart-item-price">₹${item.price}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-change" data-id="${item.id}" data-change="-1">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-change" data-id="${item.id}" data-change="1">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">&times;</button>
            </div>
        `).join('');

        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartHeader.textContent = `[${totalItems}]`;
    }



    document.querySelector('.cart-items-contianer').addEventListener('click', (event) => {
        if (event.target.classList.contains('quantity-change')) {
            const productId = parseInt(event.target.dataset.id);
            const change = parseInt(event.target.dataset.change);
            updateQuantity(productId, change);
        }

        if (event.target.classList.contains('remove-item')) {
            const productId = parseInt(event.target.dataset.id);
            removeFromCart(productId);
        }
    });

    function updateQuantity(productId, change) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                renderCart();
            }
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        renderCart();
    }
});



