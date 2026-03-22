// Particles
(function() {
    const container = document.getElementById('particles');
    if (!container) return;
    const colors = ['#ff3b6b','#a855f7','#3b82f6','#f59e0b'];
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = `
            left: ${Math.random() * 100}%;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            animation-duration: ${Math.random() * 12 + 8}s;
            animation-delay: ${Math.random() * 10}s;
        `;
        container.appendChild(p);
    }
})();

// Scroll reveal
(function() {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
})();

// Header scroll effect
(function() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.scrollY > 20
            ? '0 4px 30px rgba(0,0,0,0.5)'
            : 'none';
    });
})();
