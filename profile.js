
document.addEventListener('DOMContentLoaded', () => {
    const userNameEl = document.getElementById('user-name');
    const userEmailEl = document.getElementById('user-email');
    const logoutButton = document.getElementById('logout-button');

    // "Auth Guard": to protect page If not logged in, kick the user out.
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html'; // Redirect to login
        return; // Stop the script
    }

    // If we get here, the user is logged in. display info.
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        userNameEl.textContent = user.name;
        userEmailEl.textContent = user.email;
    }

    // handle logout process
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Clear the user data and login flag from storage
            localStorage.removeItem('user');
            localStorage.removeItem('isLoggedIn');

            // Redirect to the homepage
            window.location.href = 'index.html';
        });
    }
});