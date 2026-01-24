import { createRouter, createWebHistory } from "vue-router";
import About from "../views/AboutView.vue";
import Project from "../views/ProjectView.vue";

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
