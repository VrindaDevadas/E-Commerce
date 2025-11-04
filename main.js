/*to show the products carousel */

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('#explore-carousel');
    const homepageProducts = products.slice(0, 4);

    let carouselHTML = '';
    homepageProducts.forEach(product => {
        carouselHTML += createProductCard(product);
    });

    carouselContainer.innerHTML = carouselHTML;
});