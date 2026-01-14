// Login page script
document.getElementById('loginBtn').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    
    if (password === '') {
        alert('Please enter a password');
        return;
    }
    
    // Change this password to your own
    if (password === 'goku') {
        // Set session token
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('loginTime', Date.now());
        
        // Redirect to blog
        window.location.href = 'blog.html';
    } else {
        alert('Incorrect password');
        document.getElementById('password').value = '';
    }
});

// Allow Enter key
document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('loginBtn').click();
    }
});