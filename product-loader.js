document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));

    const product = products.find(p => p.id === productId);
    const container = document.querySelector('.product-page-container');

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
            <button class="add-to-cart-btn">ADD TO CART</button>
            <div class="description-accordion">
                 <h4>DESCRIPTION</h4>
                 <p>${product.description}</p>
            </div>
        </div>
    </section>
    `;
});