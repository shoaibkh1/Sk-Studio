document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE MENU TOGGLE (New Code) ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Toggle menu on hamburger click
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });

        // Close menu automatically when clicking any link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('is-active');
            });
        });
    }

    // --- 2. SPEED OPTIMIZATION (New Code) ---
    // Automatically adds 'loading="lazy"' to all images to make the site load faster
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });

    // --- 3. STICKY NAVBAR EFFECT (Your Original Code) ---
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(5, 5, 5, 0.98)";
            navbar.style.padding = "10px 30px";
        } else {
            navbar.style.background = "rgba(18, 18, 18, 0.95)";
            navbar.style.padding = "15px 30px";
        }
    });

});

// --- 4. PORTFOLIO FILTER LOGIC (Your Original Code) ---
// Kept outside listener so HTML onclick buttons can find it
function filterSelection(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button state
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // Check if button text matches category roughly or exact match
        if(btn.innerText.toLowerCase().includes(category) || (category === 'all' && btn.innerText === 'All')) {
            btn.classList.add('active');
        }
    });

    // Show/Hide Items
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
            // Add animation class for smooth appearance
            item.style.animation = "fadeIn 0.5s ease";
        } else {
            item.style.display = 'none';
        }
    });
}

// Simple fade animation for filter
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);
