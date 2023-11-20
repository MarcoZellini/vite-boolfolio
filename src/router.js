import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import SingleProject from './pages/SingleProject.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsPage
    },
    {
        path: '/projects/:slug',
        name: 'single-project',
        component: SingleProject
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router }