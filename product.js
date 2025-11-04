function createProductCard(product) {
    return `
        <div class="product-card">
            <a href="product.html?id=${product.id}" class="product-image-container">
                ${product.badge ? `<span class="badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.name}">
            </a>
            <div class="product-info-container">
                <a href="product.html?id=${product.id}" class="product-title">${product.name}</a>
                <div class="product-meta">
                    <a href="product.html?id=${product.id}" class="product-price">&#8377;${product.price}</a>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <span>${product.rating}</span>
                    </div>
                </div>
                <button class="add-to-cart-btn">ADD TO CART</button>
            </div>
        </div>
    `;
}