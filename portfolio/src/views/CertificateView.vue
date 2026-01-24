<template>
    <div class="container mt-5" style="max-width: 1100px;">
        <div class="text-center mb-5">
            <h1 class="display-5 fw-bold text-white mb-2">
                <i class="fa-solid fa-certificate me-3 text-warning"></i>Certificates
            </h1>
            <p class="text-secondary">Chứng chỉ và thành tựu của tôi</p>
        </div>

        <!-- Certificates by Platform -->
        <div v-for="platform in certificates" :key="platform.id" class="mb-5">
            <!-- Platform Logo (no border, no count) -->
            <div class="platform-header mb-4">
                <a v-if="platform.platformUrl" :href="platform.platformUrl" target="_blank" class="text-decoration-none">
                    <img :src="platform.platformLogo" 
                         :alt="platform.platform"
                         class="platform-logo"
                         style="max-height: 50px; max-width: 200px; object-fit: contain;">
                </a>
                <img v-else 
                     :src="platform.platformLogo" 
                     :alt="platform.platform"
                     class="platform-logo"
                     style="max-height: 50px; max-width: 200px; object-fit: contain;">
            </div>

            <!-- Certificates Grid -->
            <div class="row g-4">
                <div v-for="cert in platform.certificates" :key="cert.id" class="col-md-6 col-lg-4">
                    <div class="cert-card position-relative rounded-3" 
                         @click="openCertificate(cert)"
                         style="cursor: pointer;">
                        <img :src="cert.image" 
                             :alt="cert.title"
                             class="cert-img w-100 h-100 rounded-3"
                             style="object-fit: contain; background: #1a1a1a;">
                    </div>
                    <div class="mt-2 text-center">
                        <p class="text-secondary mb-0 small">{{ cert.title }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal xem chứng chỉ -->
        <div v-if="selectedCert" 
             class="modal-backdrop position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" 
             style="background: rgba(0, 0, 0, 0.9); z-index: 9999; animation: fadeIn 0.3s ease;"
             @click="closeCertificate">
            <div class="modal-content-wrapper position-relative" 
                 style="max-width: 90%; max-height: 90vh;"
                 @click.stop>
                <button class="btn-close-modal position-absolute bg-transparent border-0 text-white" 
                        style="top: -40px; right: 0; font-size: 2rem; cursor: pointer; z-index: 10000;"
                        @click="closeCertificate">
                    <i class="fa-solid fa-times"></i>
                </button>
                <img :src="selectedCert.image" 
                     :alt="selectedCert.title"
                     class="modal-cert-img w-100 rounded-2"
                     style="height: auto; max-height: 85vh; object-fit: contain; box-shadow: 0 20px 60px rgba(243, 214, 145, 0.3);">
                <p class="text-white text-center mt-3">{{ selectedCert.title }}</p>
            </div>
        </div>

        <!-- Empty State -->
        <div v-if="!certificates || certificates.length === 0" class="text-center py-5">
            <i class="fa-solid fa-certificate text-secondary" style="font-size: 4rem;"></i>
            <p class="text-secondary mt-3">Chưa có chứng chỉ nào</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { certificates } from '../data/certificatesData.js'

const selectedCert = ref(null)

const openCertificate = (cert) => {
    selectedCert.value = cert
}

const closeCertificate = () => {
    selectedCert.value = null
}
</script>

<style scoped>
/* Hover effects only */
.platform-logo {
    transition: all 0.3s ease;
    filter: brightness(1);
}

.platform-header:hover .platform-logo {
    filter: brightness(1.2);
}

.cert-card {
    transition: all 0.3s ease;
}

.cert-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(243, 214, 145, 0.4);
}

.btn-close-modal {
    transition: all 0.3s ease;
}

.btn-close-modal:hover {
    color: var(--bs-warning) !important;
    transform: rotate(90deg);
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
</style>
