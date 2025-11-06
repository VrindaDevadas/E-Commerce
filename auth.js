document.addEventListener('DOMContentLoaded', () => {
    const userIconlink = document.getElementById('user-icon-link');

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';  //checks if user is logged in

    if (userIconlink) {
        if (isLoggedIn) {
            userIconlink.href = 'profile.html';   //if logged in icons links to profile page
        } else {
            userIconlink.href = 'login.html';     //if not ..links to login page
        }
    }

})