// 1. Sticky Navbar Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5, 5, 5, 0.95)";
        navbar.style.padding = "10px 30px";
    } else {
        navbar.style.background = "rgba(18, 18, 18, 0.85)";
        navbar.style.padding = "15px 30px";
    }
});

// 2. Portfolio Filter Logic
function filterSelection(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button state
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category) || (category === 'all' && btn.innerText === 'All')) {
            btn.classList.add('active');
        }
    });

    // Show/Hide Items
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}