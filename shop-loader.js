document.addEventListener('DOMContentLoaded', () => {
    const bestsellersContainer = document.querySelector('#bestsellers-carousel');
    const combosContainer = document.querySelector('#combos-carousel');
    const allContainer = document.querySelector('#all-carousel');
    const lipsContainer = document.querySelector('#lips-carousel');
    const eyesContainer = document.querySelector('#eyes-carousel');
    const setsContainer = document.querySelector('#sets-carousel');

    const bestsellers = products.filter(p => p.category === 'bestseller');
    const combos = products.filter(p => p.category === 'combo');
    const skincare = products.filter(p => p.category === 'skin');
    const lips = products.filter(p => p.category === 'lips');
    const eyes = products.filter(p => p.category === 'eyes');

    if (bestsellersContainer) {
        bestsellersContainer.innerHTML = bestsellers.map(createProductCard).join('');
    }
    if (combosContainer) {
        combosContainer.innerHTML = combos.map(createProductCard).join('');
    }
    if (allContainer) {
        allContainer.innerHTML = skincare.map(createProductCard).join('');
    }
    if (lipsContainer) {
        lipsContainer.innerHTML = lips.map(createProductCard).join('');
    }
    if (eyesContainer) {
        eyesContainer.innerHTML = eyes.map(createProductCard).join('');
    }
})