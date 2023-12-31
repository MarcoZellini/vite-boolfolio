import { createWebHashHistory, createRouter } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/projects/',
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
    {
        path: '/projects/:slug',
        name: 'single-project',
        component: SingleProject
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundPage
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export { router }