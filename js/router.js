/**
 * Global function to go back to the previous page in history.
 */
function goBack() {
    window.history.back();
}

/**
 * Global function to handle user logout.
 * Clears localStorage and redirects to the login page.
 */
function logout() {
    // Dipanggil dari auth.js setelah impor.
    // window.location.href = "login.html";
    console.log("Logout function called.");
}