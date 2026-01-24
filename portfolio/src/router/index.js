import { createRouter, createWebHistory } from "vue-router";
import About from "../views/AboutView.vue";
import Project from "../views/ProjectView.vue";
import Certificate from "../views/CertificateView.vue";

const routes = [
    {
        path: '/',
        name: 'about',
        component: About
    },
    {
        path: '/projects',
        name: 'project',
        component: Project
    },
    {
        path: '/certificates',
        name: 'certificate',
        component: Certificate
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
