// js/auth.js

// Import fungsi dari router.js
import { goBack, logout } from './router.js'; 

// 1. Definisikan goBack secara global agar bisa diakses oleh onclick di HTML
window.goBack = goBack; 

// 2. Definisikan logout secara global
window.logout = function() {
    localStorage.clear();
    // Path absolute yang stabil
    window.location.href = "/Git/login.html"; 
};

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