import { goBack, logout } from './router.js'; // Import fungsi dari router.js

// Overwrite the global logout function from router.js
window.logout = function() {
    localStorage.clear();
    window.location.href = "../login.html"; // Adjust path if needed
};

// Check login status on page load (except login.html)
document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan path dari URL saat ini
    const path = window.location.pathname;
    const isLoginPage = path.endsWith('/login.html');

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // Jika tidak di halaman login dan belum login, redirect ke login
    if (!isLoginPage && isLoggedIn !== 'true') {
        window.location.href = '../login.html'; // Sesuaikan path jika perlu
    }
});

/**
 * Handles the login process.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {Promise<boolean>} - True if login is successful.
 */
export async function handleLogin(email, password) {
    try {
        const response = await fetch('./data/users.json');
        const users = await response.json();

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            // Alihkan ke Main Menu
            window.location.href = 'index.html'; 
            return true;
        } else {
            localStorage.setItem('isLoggedIn', 'false');
            return false;
        }
    } catch (error) {
        console.error('Error fetching users data:', error);
        return false;
    }
}