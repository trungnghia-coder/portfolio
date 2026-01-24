<template>
    <div class="container mt-5" style="max-width: 1000px;">
        <div class="text-center mb-5">
            <h1 class="display-5 fw-bold text-white mb-2">
                <i class="fa-solid fa-folder-open me-3 text-warning"></i>My Projects
            </h1>
            <p class="text-secondary">Những dự án tôi đã tham gia phát triển</p>
        </div>

        <div class="accordion" id="projectsAccordion">
            <div v-for="(project, index) in projects" :key="project.id" class="mb-4">
                <div class="card bg-dark border border-secondary shadow-sm">
                    <div class="card-header bg-transparent border-0 p-0">
                        <button 
                            class="btn btn-link text-decoration-none w-100 text-start p-4 d-flex align-items-center justify-content-between"
                            type="button" 
                            :data-bs-toggle="'collapse'" 
                            :data-bs-target="'#collapse' + index"
                            :aria-expanded="index === 0 ? 'true' : 'false'"
                            :aria-controls="'collapse' + index">
                            
                            <div class="d-flex align-items-center gap-3 flex-grow-1">
                                <!-- Project Number (Smaller) -->
                                <div class="project-number bg-warning text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                                     style="width: 35px; height: 35px; font-size: 1rem;">
                                    {{ index + 1 }}
                                </div>
                                
                                <!-- Project Image -->
                                <div class="project-img-wrapper flex-shrink-0 rounded-2 overflow-hidden border border-secondary" 
                                     style="width: 120px; height: 80px;">
                                    <img :src="project.image" 
                                         :alt="project.title"
                                         class="project-img w-100 h-100 rounded"
                                         style="object-fit: cover;"
                                         @error="handleImageError">
                                </div>
                                
                                <!-- Project Title -->
                                <div class="flex-grow-1">
                                    <h5 class="text-white mb-0 fw-bold">{{ project.title }}</h5>
                                </div>
                            </div>
                            
                            <i class="fa-solid fa-chevron-down text-warning fs-5 ms-3"></i>
                        </button>
                    </div>
                    
                    <div :id="'collapse' + index" 
                         :class="['accordion-collapse', 'collapse', index === 0 ? 'show' : '']" 
                         :data-bs-parent="'#projectsAccordion'">
                        <div class="card-body pt-0 px-4 pb-4">
                            <div class="border-top border-secondary pt-4">
                                <!-- Overview -->
                                <div v-if="project.overview" class="mb-4">
                                    <h6 class="text-warning fw-bold mb-3" style="font-size: 1.15rem;">
                                        <i class="fa-solid fa-info-circle me-2"></i>Overview
                                    </h6>
                                    <p class="text-secondary mb-0 lh-lg">{{ project.overview }}</p>
                                </div>
                                
                                <!-- Tech Stack -->
                                <div v-if="project.description.techstack?.length" class="mb-4">
                                    <h6 class="text-warning fw-bold mb-3" style="font-size: 1.15rem;">
                                        <i class="fa-solid fa-layer-group me-2"></i>Tech Stack
                                    </h6>
                                    <div class="d-flex flex-wrap gap-2">
                                        <span v-for="tech in project.description.techstack" :key="tech"
                                              class="badge bg-dark border border-warning px-3 py-2 text-white d-flex align-items-center gap-2"
                                              style="font-size: 0.9rem;">
                                            <i :class="getTechIcon(tech)"></i>
                                            {{ tech }}
                                        </span>
                                    </div>
                                </div>
                                
                                <!-- Responsibilities -->
                                <div v-if="project.description.responsibilities?.length" class="mb-4">
                                    <h6 class="text-warning fw-bold mb-3" style="font-size: 1.15rem;">
                                        <i class="fa-solid fa-tasks me-2"></i>Responsibilities
                                    </h6>
                                    <ul class="text-secondary lh-lg ps-3 mb-0">
                                        <li v-for="(responsibility, idx) in project.description.responsibilities" 
                                            :key="idx" class="mb-2">
                                            {{ responsibility }}
                                        </li>
                                    </ul>
                                </div>
                                
                                <!-- Links -->
                                <div v-if="project.github || project.demo" class="d-flex gap-3 flex-wrap">
                                    <a v-if="project.github" :href="project.github" 
                                       class="btn btn-outline-warning btn-sm px-4" target="_blank">
                                        <i class="fa-brands fa-github me-2"></i>GitHub
                                    </a>
                                    <a v-if="project.demo" :href="project.demo" 
                                       class="btn btn-warning btn-sm text-dark px-4" target="_blank">
                                        <i class="fa-solid fa-external-link-alt me-2"></i>Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { projects } from '../data/projectsData.js'

const getTechIcon = (tech) => {
    const iconMap = {
        'Nuxt.js': 'devicon-nuxtjs-plain colored',
        'Vue 3': 'devicon-vuejs-plain colored',
        'Vue.js': 'devicon-vuejs-plain colored',
        'TypeScript': 'devicon-typescript-plain colored',
        'JavaScript': 'devicon-javascript-plain colored',
        'Spring Boot': 'devicon-spring-plain colored',
        'PostgreSQL': 'devicon-postgresql-plain colored',
        'MySQL': 'devicon-mysql-plain colored',
        'Docker': 'devicon-docker-plain colored',
        'Java': 'devicon-java-plain colored',
        'Plasmo': 'fa-solid fa-puzzle-piece text-primary',
        'Chrome Extension API': 'fa-brands fa-chrome text-info',
        'TailwindCSS': 'devicon-tailwindcss-plain colored',
        'Thymeleaf': 'fa-solid fa-leaf text-success',
        'Bootstrap': 'devicon-bootstrap-plain colored',
        'Python': 'devicon-python-plain colored',
        'React': 'devicon-react-original colored',
        'Node.js': 'devicon-nodejs-plain colored',
        'MongoDB': 'devicon-mongodb-plain colored',
        'Firebase': 'devicon-firebase-plain colored',
        'JSP': 'fa-solid fa-file-code text-success',
        'HTML': 'devicon-html5-plain colored',
        'CSS': 'devicon-css3-plain colored',
        'YouTube API': 'fa-brands fa-youtube text-danger',
        'REST API': 'fa-solid fa-server text-info',
        'Spring Security': 'fa-solid fa-shield-alt text-success',
        'Spring Data JPA': 'fa-solid fa-database text-primary',
        'VueJS': 'devicon-vuejs-plain colored',
        'REST API': 'fa-solid fa-server text-info',
        'Axios': 'fa-solid fa-network-wired text-primary',
        'Pinia': 'fa-solid fa-cubes text-purple',
        'JWT Authentication': 'fa-solid fa-user-shield text-warning'
    }
    
    return iconMap[tech] || 'fa-solid fa-code text-warning'
}

const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/80x80/252525/F3D691?text=Project'
}
</script>

<style scoped>
/* Hover effects only - Bootstrap handles the rest */
.project-img-wrapper {
    transition: all 0.3s ease;
}

.project-img {
    transition: transform 0.3s ease;
}

.card:hover .project-img {
    transform: scale(1.1);
}

.card:hover .project-img-wrapper {
    border-color: var(--bs-warning) !important;
    box-shadow: 0 0 15px rgba(243, 214, 145, 0.4);
}

.project-number {
    transition: all 0.3s ease;
}

.card:hover .project-number {
    transform: rotate(360deg);
    box-shadow: 0 4px 12px rgba(243, 214, 145, 0.6);
}

.btn-link:not(.collapsed) i.fa-chevron-down {
    transform: rotate(180deg);
}

.btn-link i.fa-chevron-down {
    transition: transform 0.3s ease;
}

.card {
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    border-color: var(--bs-warning) !important;
    box-shadow: 0 10px 30px rgba(243, 214, 145, 0.2) !important;
}

.btn-link {
    color: white;
}

.btn-link:hover {
    color: var(--bs-warning);
}

.badge {
    transition: all 0.3s ease;
}

.badge:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(243, 214, 145, 0.3);
}
</style>
