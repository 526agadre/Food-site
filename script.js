// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(30, 20, 20, 0.98)';
        header.style.padding = '1rem 0';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.backgroundColor = 'rgba(50, 38, 38, 0.95)';
        header.style.padding = '1.5rem 0';
        header.style.boxShadow = 'none';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
