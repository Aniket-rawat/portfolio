document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    
    // Initialize all components
    initNavbar();
    initTypingEffect();
    initSkillAnimations();
    initContactForm();
    initSmoothScrolling();
    initTooltips();
    initParticleEffect();
    
    // Remove loading screen
    setTimeout(() => {
        const loading = document.querySelector('.loading');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => loading.remove(), 300);
        }
    }, 1000);
});

//Top to Bottom button
const toTopBtn = document.getElementById("toTopBtn");

    // Show button when scrolling down
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTopBtn.style.display = "block";
      } else {
        toTopBtn.style.display = "none";
      }
    };

    // Scroll to top when clicked
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

