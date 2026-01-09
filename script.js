document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('navbar-dark');
            navbar.classList.add('navbar-light');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.remove('navbar-light');
            navbar.classList.add('navbar-dark');
        }
    }

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
});
