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





 let currentSlide = 0;
        const totalSlides = 3;
        const slider = document.getElementById('slider');
        const dots = document.querySelectorAll('.dot');
        const currentCounter = document.getElementById('current');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
            
            currentCounter.textContent = currentSlide + 1;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateSlider();
        }

        // Navigation par boutons
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Navigation par dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
        });

        // Navigation automatique (optionnel)
        setInterval(nextSlide, 5000);

        // Navigation par clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Gestion du swipe tactile (mobile)
        let startX = 0;
        let endX = 0;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) nextSlide();
            if (endX - startX > 50) prevSlide();
        });
      