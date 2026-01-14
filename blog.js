// Make logout function global
window.logout = logout;

// Check authentication
(function() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    const loginTime = sessionStorage.getItem('loginTime');
    const currentTime = Date.now();
    
    // Session expires after 1 hour (3600000 ms)
    const sessionDuration = 3600000;
    
    if (! isAuthenticated || ! loginTime || (currentTime - loginTime) > sessionDuration) {
        sessionStorage.clear();
        window.location.href = 'index.html';
    }
})();

// Logout function
function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}