/*to show the products carousel */

document.addEventListener('DOMContentLoaded', () => {
    // Find the carousel container on the homepage
    const carouselContainer = document.querySelector('#explore-carousel');

    // Failsafe: only run if the container exists on this page
    if (carouselContainer) {
        // Get the first 4 products to display on the homepage
        const homepageProducts = products.slice(0, 4);

        // Use the reusable function from product.js to build the HTML
        carouselContainer.innerHTML = homepageProducts.map(createProductCard).join('');
    }

});



