document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Varshitha's World! ✨");

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-el');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.section, .card, .fav-item, .hero-content');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden-el');
        observer.observe(el);
    });

    // Add a fun sparkle effect on click
    document.addEventListener('click', (e) => {
        createSparkle(e.clientX, e.clientY);
    });
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkle-anim 1s forwards';
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle animation style dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes sparkle-anim {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
}
`;
document.head.appendChild(styleSheet);
