const products = [
    {
        id: 1,
        name: 'Glow Serum Kit',
        image: 'public/img1.png',
        price: 1050,
        rating: 4.9,
        badge: '10% off',
        category: 'bestseller',
        description: 'Unlock the essentials for your unique glow with this curated kit of our top-rated, consciously crafted best sellers.'
    },
    {
        id: 2,
        name: 'Glow Serum Kit',
        image: 'public/img1.png',
        price: 1050,
        rating: 4.9,
        badge: '10% off',
        category: 'bestseller',
        description: 'Unlock the essentials for your unique glow with this curated kit of our top-rated, consciously crafted best sellers.'
    },
    {
        id: 3,
        name: 'Bold Look Combo',
        image: 'public/img2.png',
        price: 990,
        rating: 4.6,
        badge: '20% off',
        category: 'combo',
        description: 'Everything you need for a stunning, bold look that lasts all day and night. Perfect for special occasions.'
    },
    {
        id: 4,
        name: 'Skincare Starter Set',
        image: 'public/img3.png',
        price: 1300,
        rating: 4.9,
        badge: 'free gift',
        category: 'bestseller',
        description: 'Begin your journey to healthier skin with our complete starter set. Includes a free gift with purchase!'
    },
    {
        id: 5,
        name: 'Skincare Starter Set',
        image: 'public/img3.png',
        price: 1300,
        rating: 4.9,
        badge: 'free gift',
        category: 'bestseller',
        description: 'Begin your journey to healthier skin with our complete starter set. Includes a free gift with purchase!'
    },
    {
        id: 6,
        name: 'Skincare Starter Set',
        image: 'public/img3.png',
        price: 1300,
        rating: 4.9,
        badge: 'free gift',
        category: 'bestseller',
        description: 'Begin your journey to healthier skin with our complete starter set. Includes a free gift with purchase!'
    },
    {
        id: 7,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'combo',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },
    {
        id: 8,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'lips',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },
    {
        id: 9,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'lips',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },
    {
        id: 10,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'lips',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },
    {
        id: 11,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'lips',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },
    {
        id: 12,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'lips',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },
    {
        id: 13,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'eyes',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },
    {
        id: 14,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'eyes',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    }, {
        id: 15,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'eyes',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },
    {
        id: 16,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'combo',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },

    {
        id: 17,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'skin',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },

    {
        id: 18,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'skin',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },

    {
        id: 19,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'skin',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },

    {
        id: 20,
        name: 'Natural Glow Collection',
        image: 'public/img4.png',
        price: 1119,
        rating: 4.5,
        badge: '10% off',
        category: 'skin',
        description: 'Achieve that perfect, natural "no-makeup" makeup look with these essentials for a radiant complexion.'
    },
    {
        id: 21,
        name: 'Skincare Starter Set',
        image: 'public/img3.png',
        price: 1300,
        rating: 4.9,
        badge: 'free gift',
        category: 'skin',
        description: 'Begin your journey to healthier skin with our complete starter set. Includes a free gift with purchase!'
    },
    {
        id: 22,
        name: 'Skincare Starter Set',
        image: 'public/img3.png',
        price: 1300,
        rating: 4.9,
        badge: 'free gift',
        category: 'skin',
        description: 'Begin your journey to healthier skin with our complete starter set. Includes a free gift with purchase!'
    },



];