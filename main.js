 // Toggle menu mobile
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fermer le menu en cliquant sur un lien (mobile)
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', (e) => {
            // Ne fermer le menu que si ce n'est pas un lien avec dropdown
            if (!n.parentElement.querySelector('.dropdown')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }));

        // Réinitialiser les dropdowns lors du redimensionnement
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Animation du panier au clic
        document.querySelector('.cart-icon').addEventListener('click', function() {
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });