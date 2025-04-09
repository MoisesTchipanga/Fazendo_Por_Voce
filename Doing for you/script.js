// Animação do SVG ao carregar
document.addEventListener('DOMContentLoaded', () => {
    const svg = document.getElementById('animated-svg');
    if (svg) {
        svg.style.opacity = '0';
        svg.style.transform = 'translateX(50px)';
        setTimeout(() => {
            svg.style.transition = 'all 0.8s ease-out';
            svg.style.opacity = '1';
            svg.style.transform = 'translateX(0)';
        }, 300);
    }

    // Efeito de digitação no Hero (opcional)
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle) {
        const text = heroTitle.innerText;
        heroTitle.innerHTML = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        setTimeout(typeWriter, 1000);
    }
});