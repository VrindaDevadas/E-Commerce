
document.addEventListener('DOMContentLoaded', () => {


    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartIcon = document.getElementById('cart-icon');
    const cartDrawer = document.getElementById('cart-drawer');
    const closeCartBtn = document.getElementById('close-cart-button');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.querySelector('.cart-items-container');
    const cartCounterSpan = document.querySelector('.cart-header h3 span');
    const notificationBadge = document.getElementById('cart-notification-badge');


    const saveCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart(); // Always rerender the cart after any change
    };

    const addToCart = (productId) => {
        const productToAdd = products.find(p => p.id === productId);
        if (!productToAdd) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;                     //if items already there quantity is inc
        } else {
            cart.push({ ...productToAdd, quantity: 1 });         //if not qnt 1
        }
        saveCart();
        openCart();
    };

    const updateQuantity = (productId, change) => {
        const item = cart.find(item => item.id === productId);           //fetches product
        if (!item) return;

        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId); // Remove the item
        }
        saveCart();
    };


    const renderCart = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);    //update quantity

        if (notificationBadge) {                    //adds notif badge
            if (totalItems > 0) {
                notificationBadge.textContent = totalItems;          //counts th items
                notificationBadge.classList.add('show');
            } else {
                notificationBadge.classList.remove('show');
            }
        }

        if (!cartItemsContainer) return;

        if (cartCounterSpan) {
            cartCounterSpan.textContent = `[${totalItems}]`;
        }

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center;">Your bag is empty.</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <p class="cart-item-title">${item.name}</p>
                        <p class="cart-item-price">&#8377;${item.price}</p>
                        <div class="cart-item-quantity">
                            <button class="quantity-change" data-id="${item.id}" data-change="-1">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-change" data-id="${item.id}" data-change="1">+</button>
                        </div>
                    </div>
                    <button class="remove-item" data-id="${item.id}">&times;</button>
                </div>
            `).join('');
        }
    };

    const openCart = () => {
        if (cartDrawer) cartDrawer.classList.add('open');
        if (cartOverlay) cartOverlay.classList.add('open');
    };

    const closeCart = () => {
        if (cartDrawer) cartDrawer.classList.remove('open');
        if (cartOverlay) cartOverlay.classList.remove('open');
    };

    // Global listener for "Add to Cart" buttons
    document.body.addEventListener('click', (event) => {    //adds prod to cart
        if (event.target.matches('.add-to-cart-btn, .add-to-bag-btn')) {          //checks if the elements has the required cllass
            const productElement = event.target.closest('[data-product-id]');           //finds the closest parent element
            if (productElement) {
                const productId = parseInt(productElement.dataset.productId);         //fetches prod id
                addToCart(productId);                                                                          //adds to cart
            }
        }
    });

    if (cartIcon) cartIcon.addEventListener('click', (e) => { e.preventDefault(); openCart(); });          // Prevents the browser from following the link's href="#" or navigate to a new page
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (event) => {           //adds product to cart
            if (event.target.matches('.quantity-change')) {
                const productId = parseInt(event.target.dataset.id);    //gets id as a str
                const change = parseInt(event.target.dataset.change);       //converts to num
                updateQuantity(productId, change);             //updates quantity of prod
            }
            if (event.target.matches('.remove-item')) {
                const productId = parseInt(event.target.dataset.id);
                updateQuantity(productId, -Infinity);
            }
        });
    }


    renderCart(); // Render everything on page load
});