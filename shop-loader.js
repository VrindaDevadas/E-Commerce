document.addEventListener('DOMContentLoaded', () => {
    const bestsellersContainer = document.querySelector('#bestsellers-carousel');
    const combosContainer = document.querySelector('#combos-carousel');

    const bestsellers = products.filter(p => p.category === 'bestseller');
    const combos = products.filter(p => p.category === 'combo');

    if (bestsellersContainer) {
        bestsellersContainer.innerHTML = bestsellers.map(createProductCard).join('');
    }
    if (combosContainer) {
        combosContainer.innerHTML = combos.map(createProductCard).join('');
    }
})