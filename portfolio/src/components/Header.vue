<template>
    <nav class="navbar navbar-expand-lg py-3 shadow-sm" id="mainNav">
        <div class="container">
            <!-- Brand/Logo (optional) -->
            <router-link to="/" class="navbar-brand text-warning fw-bold d-lg-none">Portfolio</router-link>
            
            <!-- Hamburger button for mobile -->
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars text-warning fs-4"></i>
            </button>
            
            <!-- Navigation links -->
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav gap-lg-4 gap-2 text-center">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link fw-bold text-secondary" active-class="text-warning">
                            <i class="fa-solid fa-user me-2 d-lg-none"></i>ABOUT
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/projects" class="nav-link fw-bold text-secondary" active-class="text-warning">
                            <i class="fa-solid fa-folder me-2 d-lg-none"></i>PROJECT
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-bold text-secondary" href="#certificate">
                            <i class="fa-solid fa-certificate me-2 d-lg-none"></i>CERTIFICATE
                        </a>
                    </li>
                </ul>
            </div>
            
            <!-- Theme toggle (hidden on mobile in navbar, available in bottom nav) -->
            <div class="d-none d-lg-block ms-auto">
                <i class="fa-regular fa-moon fs-5 text-light" style="cursor: pointer;"></i>
            </div>
        </div>
    </nav>

    <!-- Bottom Mini Navigation -->
    <div class="bottom-nav" id="bottomNav">
        <div class="d-flex align-items-center justify-content-center gap-1">
            <router-link to="/" class="nav-icon text-decoration-none">
                <i class="fa-solid fa-user text-secondary fs-5"></i>
            </router-link>
            <router-link to="/projects" class="nav-icon text-decoration-none">
                <i class="fa-solid fa-folder text-secondary fs-5"></i>
            </router-link>
            <a href="#certificate" class="nav-icon text-decoration-none">
                <i class="fa-solid fa-certificate text-secondary fs-5"></i>
            </a>
            <a href="#" class="nav-icon text-decoration-none" @click.prevent="scrollToTop">
                <i class="fa-solid fa-arrow-up text-secondary fs-5"></i>
            </a>
        </div>
    </div>
</template>

<script setup>
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/* Close mobile menu when clicking a link */
.navbar-nav .nav-link {
    transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
    color: var(--bs-warning) !important;
}

/* Active route indicator for bottom nav */
.nav-icon {
    transition: all 0.3s ease;
}

.nav-icon.router-link-active i {
    color: var(--bs-warning) !important;
}
</style>