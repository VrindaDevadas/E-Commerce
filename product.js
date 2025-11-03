function createProductCard(product) {

    return `<a href="product.html?id=${product.id} class=product-card-link>
       <div class="product-card">
               ${product.badge ? `
                <div class="badge-container">
                    <span class="badge">10% off</span>
                </div>` : ' '}
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                </div>
                <div class="price-rating">
                    <span class="price"> ${product.price}</span>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <span>${product.rating}</span>
                    </div>
                </div>
                <button class="add-to-bag-btn">ADD TO BAG </button>

            </div>

        </a> ` ;

}