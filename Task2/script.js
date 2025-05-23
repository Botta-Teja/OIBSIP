// This can be used for any interactive elements if needed
document.addEventListener('DOMContentLoaded', function() {
    // Animation for achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach((card, index) => {
        // Add delay based on index for staggered animation
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
