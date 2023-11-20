import { createWebHistory, createRouter } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ContactsPage from './pages/ContactsPage.vue';

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