document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));       //gets id in string and converts into number

    const product = products.find(p => p.id === productId);        //finds the correct product    //find() loops through every product in array
    const container = document.querySelector('.product-page-container');       //finds container to put html

    if (!product) {
        container.innerHTML = '<h1>Product Not Found</h1>';
        return;
    }

    document.title = `${product.name} - Saffron`;
    container.innerHTML = `
    <section class="product-page">
        <div class="product-gallery">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
            <h1 class="product-title">${product.name}</h1>
            <div class="product-meta">
                <div class="product-price">
                    <span class="current-price">₹ ${product.price}</span>
                </div>
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i><span>${product.rating}</span>
                </div>
            </div>
            <button class="add-to-bag-btn-product-pages">ADD TO CART</button>
            <div class="description-accordion">
                 <h4>DESCRIPTION</h4>
                 <p>${product.description}</p>
            </div>
        </div>
    </section>

    `;


    //adding an event listener to trigger the add to cart button functionality

    container.querySelector('.product-page').dataset.productId = product.id;

    document.querySelector('.add-to-bag-btn-product-page').addEventListener('click', () => {
        if (typeof addToCart === 'function') {
            addToCart(product);
        } else {
            alert('${product.name}added to cart!');
        }
    })
});