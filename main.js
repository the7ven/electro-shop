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



        // Données des produits
        const products = {
            1: {
                title: "Nike Air Max Revolution",
                price: "89.99€",
                oldPrice: "129.99€",
                savings: "Économisez 40€",
                rating: "★★★★★",
                ratingCount: "(2,847 avis)",
                description: "Découvrez la révolution Nike Air Max avec cette édition limitée. Confort exceptionnel, design innovant et technologie de pointe pour accompagner tous vos mouvements.",
                features: [
                    "Technologie Air Max pour un amorti optimal",
                    "Matériaux respirants et durables",
                    "Semelle antidérapante haute performance",
                    "Design moderne et polyvalent",
                    "Disponible en plusieurs coloris"
                ],
                images: [
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop"
                ]
            },
            2: {
                title: "Montre Élégante Pro",
                price: "199.99€",
                oldPrice: "",
                savings: "",
                rating: "★★★★☆",
                ratingCount: "(1,523 avis)",
                description: "Une montre alliant élégance et technologie. Parfaite pour le quotidien comme pour les occasions spéciales.",
                features: [
                    "Écran AMOLED haute résolution",
                    "Étanche jusqu'à 50m",
                    "Batterie longue durée (7 jours)",
                    "Suivi santé et fitness",
                    "Bracelet en cuir véritable"
                ],
                images: [
                    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600&h=400&fit=crop"
                ]
            },
            3: {
                title: "Casque Audio Premium",
                price: "149.99€",
                oldPrice: "179.99€",
                savings: "Économisez 30€",
                rating: "★★★★★",
                ratingCount: "(892 avis)",
                description: "Expérience audio immersive avec réduction active du bruit. Parfait pour la musique, les appels et le gaming.",
                features: [
                    "Réduction active du bruit",
                    "Autonomie 30h avec charge rapide",
                    "Son Hi-Res certifié",
                    "Bluetooth 5.0 multipoint",
                    "Confort longue durée"
                ],
                images: [
                    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=400&fit=crop"
                ]
            },
            4: {
                title: "MacBook Pro M3 - Collection Limitée",
                price: "1,899.99€",
                oldPrice: "",
                savings: "",
                rating: "★★★★★",
                ratingCount: "(4,156 avis)",
                description: "Le MacBook Pro avec puce M3 révolutionne les performances. Parfait pour les créatifs et professionnels exigeants.",
                features: [
                    "Puce Apple M3 ultra-rapide",
                    "Écran Liquid Retina XDR 14 pouces",
                    "Jusqu'à 22h d'autonomie",
                    "Caméra FaceTime HD 1080p",
                    "Ports Thunderbolt 4, HDMI, MagSafe"
                ],
                images: [
                    "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop"
                ]
            },
            5: {
                title: "Casque VR Immersif",
                price: "299.99€",
                oldPrice: "399.99€",
                savings: "Économisez 100€",
                rating: "★★★★☆",
                ratingCount: "(678 avis)",
                description: "Plongez dans la réalité virtuelle avec ce casque haute performance. Gaming, cinéma, fitness - explorez de nouveaux mondes.",
                features: [
                    "Résolution 4K par œil",
                    "Tracking 6DOF précis",
                    "Audio spatial 3D intégré",
                    "Bibliothèque de plus de 500 jeux",
                    "Confort optimisé pour sessions longues"
                ],
                images: [
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop"
                ]
            },
            6: {
                title: "Sac à Dos Design",
                price: "79.99€",
                oldPrice: "",
                savings: "",
                rating: "★★★★★",
                ratingCount: "(2,341 avis)",
                description: "Sac à dos urbain alliant style et fonctionnalité. Parfait pour le travail, les voyages et le quotidien.",
                features: [
                    "Compartiment laptop 15 pouces",
                    "Port de charge USB intégré",
                    "Matériau imperméable",
                    "Design anti-vol avec fermetures cachées",
                    "Bretelles ergonomiques rembourrées"
                ],
                images: [
                    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
                    "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=600&h=400&fit=crop"
                ]
            }
        };

        // Gestion des modales
        const modal = document.getElementById('productModal');
        const closeBtn = document.getElementsByClassName('close')[0];
        let currentImageIndex = 0;

        // Ouvrir la modale
        document.querySelectorAll('.bento-item').forEach(item => {
            item.addEventListener('click', function() {
                const productId = this.getAttribute('data-product');
                const product = products[productId];
                
                if (product) {
                    openModal(product);
                }
            });
        });

        function openModal(product) {
            // Remplir les informations du produit
            document.getElementById('modalTitle').textContent = product.title;
            document.getElementById('modalPrice').textContent = product.price;
            document.getElementById('modalOldPrice').textContent = product.oldPrice;
            document.getElementById('modalSavings').textContent = product.savings;
            document.getElementById('modalRating').textContent = product.rating;
            document.getElementById('modalRatingCount').textContent = product.ratingCount;
            document.getElementById('modalDescription').textContent = product.description;

            // Masquer les éléments vides
            document.getElementById('modalOldPrice').style.display = product.oldPrice ? 'inline' : 'none';
            document.getElementById('modalSavings').style.display = product.savings ? 'inline' : 'none';

            // Remplir les caractéristiques
            const featuresList = document.getElementById('modalFeatures');
            featuresList.innerHTML = '';
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });

            // Charger les images
            loadImages(product.images);
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function loadImages(images) {
            currentImageIndex = 0;
            const mainImage = document.getElementById('mainImage');
            const thumbnailContainer = document.getElementById('thumbnailContainer');
            
            // Image principale
            mainImage.style.backgroundImage = `url('${images[0]}')`;
            
            // Miniatures
            thumbnailContainer.innerHTML = '';
            images.forEach((image, index) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                thumbnail.style.backgroundImage = `url('${image}')`;
                thumbnail.addEventListener('click', () => switchImage(index, images));
                thumbnailContainer.appendChild(thumbnail);
            });
        }

        function switchImage(index, images) {
            currentImageIndex = index;
            const mainImage = document.getElementById('mainImage');
            mainImage.style.backgroundImage = `url('${images[index]}')`;
            
            // Mettre à jour les miniatures actives
            document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
        }

        // Fermer la modale
        closeBtn.addEventListener('click', closeModal);
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Fermer avec Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });

        // Gestion des boutons d'action
        document.querySelector('.add-to-cart').addEventListener('click', function() {
            // Animation de feedback
            this.innerHTML = '✓ Ajouté au panier';
            this.style.background = 'linear-gradient(45deg, #2ed573, #1abc9c)';
            
            setTimeout(() => {
                this.innerHTML = 'Ajouter au panier';
                this.style.background = 'linear-gradient(45deg, #3498db, #2980b9)';
            }, 2000);
        });

        document.querySelector('.buy-now').addEventListener('click', function() {
            // Simulation d'achat immédiat
            this.innerHTML = 'Redirection...';
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                alert('Redirection vers la page de commande...');
                this.innerHTML = 'Acheter maintenant';
                this.style.opacity = '1';
            }, 1500);
        });

        // Animation des étoiles au hover
        document.querySelectorAll('.product-rating .star').forEach(star => {
            star.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2)';
                this.style.textShadow = '0 0 10px #f39c12';
            });
            
            star.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.textShadow = 'none';
            });
        });

        // Animation des badges
        document.querySelectorAll('.bestseller-badge').forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.animation = 'pulse 0.6s ease-in-out';
            });
        });

        // Ajout d'animations CSS pour les badges
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
            
            .bento-item:hover .bestseller-badge {
                animation: bounce 0.8s ease-in-out;
            }
            
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-10px); }
                60% { transform: translateY(-5px); }
            }
            
            .modal-content {
                animation: modalSlideIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }
            
            @keyframes modalSlideIn {
                from {
                    transform: scale(0.7) translateY(-50px);
                    opacity: 0;
                }
                to {
                    transform: scale(1) translateY(0);
                    opacity: 1;
                }
            }
            
            .thumbnail {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .thumbnail:hover {
                transform: scale(1.1) rotate(2deg);
                box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
            }
            
            .action-buttons button {
                position: relative;
                overflow: hidden;
            }
            
            .action-buttons button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                transition: left 0.5s;
            }
            
            .action-buttons button:hover::before {
                left: 100%;
            }
            
            .bento-item::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
                opacity: 0;
                transition: opacity 0.3s ease;
                border-radius: 20px;
                pointer-events: none;
            }
            
            .bento-item:hover::before {
                opacity: 1;
            }
            
            .product-image::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0);
                transition: background 0.3s ease;
                border-radius: 15px;
            }
            
            .bento-item:hover .product-image::after {
                background: rgba(0,0,0,0.1);
            }
            
            .quick-view-btn {
                transform: translateY(10px);
                opacity: 0.8;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .bento-item:hover .quick-view-btn {
                transform: translateY(0);
                opacity: 1;
            }
        `;
        document.head.appendChild(style);

        // Effet parallaxe subtil sur le scroll
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            document.querySelectorAll('.bento-item').forEach((item, index) => {
                const speed = 0.5 + (index * 0.1);
                item.style.transform = `translateY(${rate * speed}px)`;
            });
        });

        // Animation d'entrée des éléments
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observer tous les éléments bento
        document.querySelectorAll('.bento-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            observer.observe(item);
        });

        // Animation slideInUp
        const slideInUpStyle = document.createElement('style');
        slideInUpStyle.textContent = `
            @keyframes slideInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(slideInUpStyle);

        // Effet de particules sur les badges bestseller
        function createParticle(element) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = '#ff4757';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            
            const rect = element.getBoundingClientRect();
            particle.style.left = rect.left + Math.random() * rect.width + 'px';
            particle.style.top = rect.top + Math.random() * rect.height + 'px';
            
            document.body.appendChild(particle);
            
            particle.animate([
                { transform: 'translateY(0px)', opacity: 1 },
                { transform: 'translateY(-20px)', opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }

        // Ajouter l'effet de particules aux badges
        document.querySelectorAll('.bestseller-badge').forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                for (let i = 0; i < 3; i++) {
                    setTimeout(() => createParticle(this), i * 100);
                }
            });
        });

       
      