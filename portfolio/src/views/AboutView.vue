<template>
    <div class="container mt-5" style="max-width: 900px;">
        <div class="row align-items-center mb-5">
            <div class="col-md-5 d-flex justify-content-center justify-content-md-start mb-4 mb-md-0">
                <div class="avatar-bg" style="max-width: 300px;">
                    <img src="../assets/images/IMG_7697.JPG" alt="Avatar" class="w-100 h-100">
                </div>
            </div>
            <div class="col-md-7 text-center text-md-start">
                <p class="mb-1 text-secondary small">Hello, my name's</p>
                <div class="d-flex align-items-center justify-content-center justify-content-md-start gap-3 mb-3">
                    <h1 class="display-4 fw-bold mb-0">Nguyễn Trung Nghĩa</h1>
                    <span class="text-secondary" style="font-size: 1.2rem;">|</span>
                    <h2 class="h4 text-warning mb-0">Frontend Developer</h2>
                </div>
                <p class="connect-text text-secondary small" @click.prevent="toggleSocial" style="font-size: 0.9rem;">
                    <i class="fa-solid fa-link me-1"></i>Connect to me
                </p>
                <div class="d-flex gap-3 justify-content-center justify-content-md-start" id="socialIcons">
                    <a href="#" class="social-icon fs-4" style="color: #1877F2;"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="social-icon text-white fs-4"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>

        <section class="mb-5">
            <h6 class="fw-bold text-uppercase">About</h6>
            <hr class="border border-secondary opacity-25">
            <p class="text-secondary lh-lg">
                Chào mọi người, mình là Trung Nghĩa. Mình đang là sinh viên năm cuối chuyên ngành Phát triển phần mềm. 
                Tính mình khá thoải mái, thích tìm tòi những cái mới, đặc biệt là các công cụ AI để hỗ trợ công việc nhanh hơn.
            </p>
        </section>

        <section class="mb-5" id="skills">
            <h6 class="fw-bold text-uppercase">My Skill</h6>
            <hr class="border border-secondary opacity-25">
            
            <!-- Frontend Skills -->
            <div class="card mb-4 shadow-sm transition">
                <div class="card-body p-4">
                    <h5 class="card-title text-warning fw-bold mb-3">
                        <i class="fa-solid fa-palette me-2"></i>Frontend
                    </h5>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-html5-plain colored"></i> HTML5
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-css3-plain colored"></i> CSS3
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-javascript-plain colored"></i> JavaScript
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-vuejs-plain colored"></i> Vue.js
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-nuxtjs-plain colored"></i> Nuxt.js
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-bootstrap-plain colored"></i> Bootstrap
                        </span>
                    </div>
                </div>
            </div>

            <!-- Backend Skills -->
            <div class="card mb-4 shadow-sm transition">
                <div class="card-body p-4">
                    <h5 class="card-title text-warning fw-bold mb-3">
                        <i class="fa-solid fa-server me-2"></i>Backend
                    </h5>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-java-plain colored"></i> Java
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-spring-plain colored me-1"></i> Spring Boot
                        </span>
                    </div>
                </div>
            </div>

            <!-- Database Skills -->
            <div class="card mb-4 shadow-sm transition">
                <div class="card-body p-4">
                    <h5 class="card-title text-warning fw-bold mb-3">
                        <i class="fa-solid fa-database me-2"></i>Database
                    </h5>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-mysql-plain colored"></i> MySQL
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-postgresql-plain colored"></i> PostgreSQL
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-microsoftsqlserver-plain colored"></i> SQL Server
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-firebase-plain colored"></i> Firebase
                        </span>
                    </div>
                </div>
            </div>

            <!-- Tools -->
            <div class="card mb-4 shadow-sm transition">
                <div class="card-body p-4">
                    <h5 class="card-title text-warning fw-bold mb-3">
                        <i class="fa-solid fa-tools me-2"></i>Tools
                    </h5>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-github-plain colored"></i> Github
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-postman-plain colored"></i> Postman
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-figma-plain colored"></i> Figma
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-vscode-plain colored"></i> VSCode
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-intellij-plain colored"></i> IntelliJ IDEA
                        </span>
                    </div>
                </div>
            </div>

            <!-- AI-Assisted Development -->
            <div class="card mb-4 shadow-sm transition">
                <div class="card-body p-4">
                    <h5 class="card-title text-warning fw-bold mb-3">
                        <i class="fa-solid fa-robot me-2"></i>AI-Assisted Development
                    </h5>
                    <div class="d-flex flex-wrap gap-2">
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-github-plain colored"></i> Github Copilot
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="fa-solid fa-comments me-1 text-success"></i> ChatGPT
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="devicon-google-plain colored"></i> Gemini
                        </span>
                        <span class="badge bg-dark border border-secondary px-3 py-2">
                            <i class="fa-solid fa-brain me-1 text-warning"></i> Claude
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-5" id="education">
            <h6 class="fw-bold text-uppercase">Education</h6>
            <hr class="border border-secondary opacity-25">
            
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-auto">
                        <img src="../assets/images/image.png" alt="FPT Polytechnic Logo" class="rounded-3" style="width: 80px; height: 80px; object-fit: cover;">
                    </div>
                    <div class="col">
                        <h5 class="text-white fw-bold mb-2">FPT Polytechnic</h5>
                        <p class="text-secondary mb-0" style="font-size: 1.1rem;">Software Development</p>
                    </div>
                    <div class="col-auto text-end">
                        <p class="text-white mb-0" style="font-size: 1.1rem;">Sep 2021 — Present</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-5" id="education">
            <h6 class="fw-bold text-uppercase">Github Contributions</h6>
            <hr class="border border-secondary opacity-25">
            <!-- GitHub Contribution Graph -->
            <div class="text-center my-4">
                <img src="https://ghchart.rshah.org/trungnghia-coder" 
                    alt="GitHub Contribution Graph" 
                    class="img-fluid rounded w-100">
            </div>
        </section>
    </div>
</template>

 <script setup>
    // Scroll Detection for Navigation
    let lastScrollTop = 0;
    const mainNav = document.getElementById('mainNav');
    const bottomNav = document.getElementById('bottomNav');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 200) {
            // Scrolled down more than 200px
            mainNav.classList.add('hidden');
            bottomNav.classList.add('visible');
        } else {
            // Near top
            mainNav.classList.remove('hidden');
            bottomNav.classList.remove('visible');
        }
        
        lastScrollTop = scrollTop;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Toggle social icons
    function toggleSocial() {
        const socialIcons = document.getElementById('socialIcons');
        socialIcons.style.transition = 'all 0.3s ease';
        if (socialIcons.style.opacity === '0' || !socialIcons.style.opacity) {
            socialIcons.style.opacity = '1';
            socialIcons.style.transform = 'scale(1)';
        } else {
            socialIcons.style.opacity = '0';
            socialIcons.style.transform = 'scale(0.8)';
        }
    }
</script>