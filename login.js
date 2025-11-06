document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();     //stops form frm submitting/reloading


            const email = document.getElementById('email').value;

            localStorage.setItem('user', JSON.stringify({ name: 'Saffron Customer', email: email }));
            localStorage.setItem('isLoggedIn', 'true');


            // Redirect the user to their new profile page
            window.location.href = 'profile.html';
        });

    }

})