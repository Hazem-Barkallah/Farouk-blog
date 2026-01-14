/**
 * Main JavaScript file for Farouk's Blog
 * Handles login authentication and page interactions
 */

// ============================================
// Login Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the login page
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        handleLoginPage();
    }
    
    // Check if we're on the blog page
    if (document.querySelector('.blog-page')) {
        handleBlogPage();
    }
});

/**
 * Handles login page functionality
 */
function handleLoginPage() {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    
    // Check if user is already logged in
    if (isUserAuthenticated()) {
        window.location.href = 'blog.html';
        return;
    }
    
    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = passwordInput.value.trim();
        
        // Clear previous error message
        errorMessage.textContent = '';
        
        // Validate password
        if (!password) {
            showError('Please enter a password');
            return;
        }
        
        // For demo purposes, accept any non-empty password
        // In production, this would validate against a backend
        if (password.length >= 3) {
            // Store authentication token in localStorage
            authenticateUser(password);
            
            // Add success animation
            const loginBtn = loginForm.querySelector('.login-btn');
            loginBtn.textContent = 'SUCCESS!';
            loginBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
            
            // Redirect to blog page after brief delay
            setTimeout(function() {
                window.location.href = 'blog.html';
            }, 800);
        } else {
            showError('Password must be at least 3 characters long');
            shakeAnimation(loginForm);
        }
    });
    
    // Add input event listener for real-time validation
    passwordInput.addEventListener('input', function() {
        if (errorMessage.textContent) {
            errorMessage.textContent = '';
        }
    });
    
    // Handle Enter key
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginForm.dispatchEvent(new Event('submit'));
        }
    });
}

/**
 * Shows error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.animation = 'fadeIn 0.3s ease';
}

/**
 * Adds shake animation to element
 * @param {HTMLElement} element - Element to shake
 */
function shakeAnimation(element) {
    element.style.animation = 'shake 0.5s ease';
    setTimeout(function() {
        element.style.animation = '';
    }, 500);
}

/**
 * Authenticates user and stores session
 * @param {string} password - User password
 */
function authenticateUser(password) {
    const sessionData = {
        authenticated: true,
        timestamp: new Date().toISOString(),
        sessionId: generateSessionId()
    };
    localStorage.setItem('blogAuth', JSON.stringify(sessionData));
}

/**
 * Checks if user is authenticated
 * @returns {boolean} - True if authenticated
 */
function isUserAuthenticated() {
    const authData = localStorage.getItem('blogAuth');
    if (!authData) return false;
    
    try {
        const session = JSON.parse(authData);
        // Check if session is valid (within 24 hours)
        const sessionTime = new Date(session.timestamp);
        const now = new Date();
        const hoursDiff = (now - sessionTime) / (1000 * 60 * 60);
        
        return session.authenticated && hoursDiff < 24;
    } catch (e) {
        return false;
    }
}

/**
 * Generates a random session ID
 * @returns {string} - Random session ID
 */
function generateSessionId() {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
}

/**
 * Logs out user
 */
function logoutUser() {
    localStorage.removeItem('blogAuth');
    window.location.href = 'index.html';
}

// ============================================
// Blog Page Functionality
// ============================================

/**
 * Handles blog page functionality
 */
function handleBlogPage() {
    // Optional: Check authentication for blog page
    // Uncomment if you want to protect the blog page
    /*
    if (!isUserAuthenticated()) {
        window.location.href = 'index.html';
        return;
    }
    */
    
    // Add smooth scroll animations for blog cards
    animateOnScroll();
    
    // Add click handlers to blog cards
    addBlogCardInteractions();
}

/**
 * Adds scroll animations to elements
 */
function animateOnScroll() {
    const cards = document.querySelectorAll('.blog-card');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                // Stagger animation for cards
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/**
 * Adds interactive behavior to blog cards
 */
function addBlogCardInteractions() {
    const cards = document.querySelectorAll('.blog-card');
    
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Add ripple effect
            createRipple(card, event);
            
            // Optional: Navigate to full blog post
            // In a real application, this would link to individual post pages
            console.log('Blog card clicked:', card.querySelector('.card-title').textContent);
        });
        
        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

/**
 * Creates ripple effect on element
 * @param {HTMLElement} element - Target element
 * @param {Event} event - Click event
 */
function createRipple(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.4)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(function() {
        ripple.remove();
    }, 600);
}

// ============================================
// CSS Animations (add to style.css if not present)
// ============================================

// Add these keyframes to your CSS:
/*
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
*/

// ============================================
// Utility Functions
// ============================================

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    };
}

// ============================================
// Performance Monitoring (Optional)
// ============================================

// Log page load performance
window.addEventListener('load', function() {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    }
});
