// --- Blog Data (Simulated CMS) ---
const blogPosts = [
    {
        id: 1,
        title: "5 Estrategias de Crecimiento B2B para 2026",
        excerpt: "Descubre las tácticas probadas que están redefiniendo cómo las empresas escalan en mercados saturados.",
        category: "Estrategia",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "15 Mar 2026",
        author: "Marc T.",
        link: "blog-estrategias-crecimiento.html"
    },
    {
        id: 2,
        title: "IA en B2B: Más allá del Hype",
        excerpt: "Cómo implementar inteligencia artificial pragmática para optimizar procesos y no solo para seguir tendencias.",
        category: "Tecnología",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "20 Mar 2026",
        author: "Elena R.",
        link: "blog-ia-b2b.html"
    },
    {
        id: 3,
        title: "El Poder de las Alianzas Estratégicas",
        excerpt: "Por qué competir es cosa del pasado. Aprende a estructurar joint ventures que multipliquen tu alcance.",
        category: "Estrategia",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "25 Mar 2026",
        author: "Marc T.",
        link: "blog-alianzas-estrategicas.html"
    },
    {
        id: 4,
        title: "Guía de Expansión Internacional",
        excerpt: "Claves culturales y operativas para llevar tu negocio a nuevos territorios sin morir en el intento.",
        category: "Expansión",
        image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "28 Mar 2026",
        author: "Sarah J.",
        link: "blog-expansion-internacional.html"
    },
    {
        id: 5,
        title: "Psicología de Ventas B2B: ABM",
        excerpt: "Cómo personalizar tu enfoque para cerrar cuentas Enterprise utilizando principios psicológicos y datos.",
        category: "Ventas",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        date: "02 Abr 2026",
        author: "Roberto M.",
        link: "blog-psicologia-ventas.html"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            const bars = hamburger.querySelectorAll('.bar');
            if (hamburger.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                const bars = hamburger.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }

    // --- Dynamic Blog Rendering ---
    
    // Function to create HTML for a blog card
    const createBlogCard = (post, delayIndex = 0) => {
        return `
            <article class="blog-card fade-in-up delay-${delayIndex}" data-category="${post.category}">
                <div class="blog-img" style="background-image: url('${post.image}')"></div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span>${post.date}</span>
                        <span>${post.author}</span>
                    </div>
                    <span class="blog-tag">${post.category}</span>
                    <h4>${post.title}</h4>
                    <p>${post.excerpt}</p>
                    <a href="${post.link}" class="read-more">Leer Artículo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </article>
        `;
    };

    // 1. Render Homepage Insights (Top 3)
    const homepageGrid = document.getElementById('homepage-insights-grid');
    if (homepageGrid) {
        // Simulate async load
        setTimeout(() => {
            homepageGrid.innerHTML = ''; // Clear loader
            blogPosts.slice(0, 3).forEach((post, index) => {
                homepageGrid.innerHTML += createBlogCard(post, index + 1);
            });
            // Re-trigger observer for new elements
            initObserver();
        }, 800);
    }

    // 2. Render Blog Page Grid (All)
    const blogPageGrid = document.getElementById('blog-grid');
    const paginationControls = document.getElementById('pagination-controls');
    
    if (blogPageGrid && document.body.classList.contains('blog-page')) {
        // Simulate async load
        setTimeout(() => {
            blogPageGrid.innerHTML = '';
            blogPosts.forEach((post, index) => {
                // Determine delay class (0, 1, 2)
                const delay = (index % 3) + 1;
                blogPageGrid.innerHTML += createBlogCard(post, delay);
            });
            
            // Show pagination if needed (mock)
            if (paginationControls) {
                paginationControls.style.display = 'block';
            }
            
            initObserver();
            initFilters();
        }, 600);
    }

    // --- Blog Filtering Logic ---
    function initFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('blog-search');
        
        if (!filterBtns.length) return;

        // Category Filter
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                const cards = document.querySelectorAll('.blog-card');
                
                cards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex'; // Restore flex display
                        setTimeout(() => card.classList.add('visible'), 50);
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('visible');
                    }
                });
            });
        });

        // Search Filter
        if (searchInput) {
            searchInput.addEventListener('keyup', (e) => {
                const term = e.target.value.toLowerCase();
                const cards = document.querySelectorAll('.blog-card');
                
                cards.forEach(card => {
                    const title = card.querySelector('h4').textContent.toLowerCase();
                    const text = card.querySelector('p').textContent.toLowerCase();
                    
                    if (title.includes(term) || text.includes(term)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }
    }

    // --- Contact Form Validation & Simulation ---
    const contactForm = document.getElementById('main-contact-form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        
        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateInput(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('invalid')) validateInput(input);
            });
        });

        function validateInput(input) {
            let isValid = true;
            if (input.type === 'email') {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = re.test(input.value);
            } else {
                isValid = input.value.trim().length >= (input.getAttribute('minlength') || 1);
            }

            if (isValid) {
                input.classList.remove('invalid');
                input.classList.add('valid');
            } else {
                input.classList.remove('valid');
                input.classList.add('invalid');
            }
            return isValid;
        }

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isFormValid = true;
            inputs.forEach(input => {
                if (!validateInput(input)) isFormValid = false;
            });

            if (!isFormValid) return;

            // Simulate submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            const successMsg = contactForm.querySelector('.success-message');
            const errorMsg = contactForm.querySelector('.error-message');

            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                // Show success
                successMsg.classList.remove('hidden');
                contactForm.reset();
                inputs.forEach(i => i.classList.remove('valid'));

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }, 2000);
        });
    }

    // --- Scroll Animation Observer (Refined) ---
    function initObserver() {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden-start');
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up:not(.visible)').forEach(el => {
            el.classList.add('hidden-start'); 
            observer.observe(el);
        });

        // Fallback
        setTimeout(() => {
            document.querySelectorAll('.fade-in-up.hidden-start').forEach(el => {
                el.classList.remove('hidden-start');
                el.classList.add('visible');
            });
        }, 1000);
    }
    
    // Initial call
    initObserver();

    // --- Neural Network Canvas (Keep existing logic) ---
    const canvas = document.getElementById('neural-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        
        const colorTech = '6, 182, 212'; // Cyan RGB
        const colorHuman = '245, 158, 11'; // Amber RGB

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2 + 1;
                this.type = Math.random() > 0.5 ? 'tech' : 'human';
                this.color = this.type === 'tech' ? `rgba(${colorTech}, ` : `rgba(${colorHuman}, `;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color + '0.6)';
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = Math.min(width * 0.08, 80);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach((p, index) => {
                p.update();
                p.draw();

                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        let strokeColor;
                        if (p.type === p2.type) {
                            strokeColor = p.color + (1 - distance / 120) * 0.2 + ')';
                        } else {
                            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
                            gradient.addColorStop(0, `rgba(${colorTech}, ${1 - distance/120})`);
                            gradient.addColorStop(1, `rgba(${colorHuman}, ${1 - distance/120})`);
                            strokeColor = gradient;
                        }
                        
                        ctx.strokeStyle = strokeColor;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(animate);
        }

        initParticles();
        animate();
    }

    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = item.querySelector('.faq-answer');
            question.classList.toggle('active');
            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });

    // --- Chatbot Logic ---
    const chatToggle = document.querySelector('.chat-toggle');
    const chatWindow = document.querySelector('.chat-window');
    const chatClose = document.querySelector('.chat-close');
    const chatInput = document.getElementById('chat-input-field');
    const chatSend = document.getElementById('send-chat');
    const chatMessages = document.getElementById('chat-messages');

    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', () => {
            chatWindow.classList.toggle('active');
            chatToggle.style.transform = chatWindow.classList.contains('active') ? 'scale(0)' : 'scale(1)';
        });

        chatClose.addEventListener('click', () => {
            chatWindow.classList.remove('active');
            chatToggle.style.transform = 'scale(1)';
        });

        function addMessage(text, sender) {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('message', sender);
            msgDiv.innerHTML = `<p>${text}</p>`;
            chatMessages.appendChild(msgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function handleChat() {
            const text = chatInput.value.trim();
            if (text) {
                addMessage(text, 'user');
                chatInput.value = '';
                setTimeout(() => {
                    const responses = [
                        "Interesante pregunta. Nuestra IA analiza patrones de comportamiento para predecir esto.",
                        "Absolutamente. Podemos integrar nuestros modelos con tu CRM actual.",
                        "Gran punto. La sinergia humano-IA es clave para resolver ese desafío.",
                        "¿Te gustaría agendar una demo breve para ver esto en acción?"
                    ];
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    addMessage(randomResponse, 'bot');
                }, 1000);
            }
        }

        chatSend.addEventListener('click', handleChat);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChat();
        });
    }

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
