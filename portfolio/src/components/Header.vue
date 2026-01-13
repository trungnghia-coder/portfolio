<template>
    <nav class="navbar navbar-expand-lg py-3 shadow-sm" id="mainNav">
        <div class="container position-relative">
            <div class="collapse navbar-collapse justify-content-center">
                <ul class="navbar-nav gap-4">
                    <li class="nav-item"><a class="nav-link fw-bold text-secondary" href="/">ABOUT</a></li>
                    <li class="nav-item"><a class="nav-link fw-bold text-secondary" href="/projects">PROJECT</a></li>
                    <li class="nav-item"><a class="nav-link fw-bold text-secondary" href="#certificate">CERTIFICATE</a></li>
                </ul>
            </div>
            <div class="position-absolute end-0 me-3">
                <i class="fa-regular fa-moon fs-5 text-light" style="cursor: pointer;"></i>
            </div>
        </div>
    </nav>

    <!-- Bottom Mini Navigation -->
    <div class="bottom-nav" id="bottomNav">
        <div class="d-flex align-items-center justify-content-center gap-1">
            <a href="" class="nav-icon text-decoration-none">
                <i class="fa-solid fa-user text-secondary fs-5"></i>
            </a>
            <a href="#project" class="nav-icon text-decoration-none">
                <i class="fa-solid fa-folder text-secondary fs-5"></i>
            </a>
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
    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>