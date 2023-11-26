<template>
    <ProjectsHero />
    <!-- <div id="jumbotron" class="p-5 bg-secondary-subtle">
        <div class="container py-5 text-center text-lg-start">
            <h1 class="display-5 fw-bold text-center">Hi There!</h1>
            <p class="fs-4 text-center">This is Marco and here you can see all my projects!</p>
        </div>
    </div> -->
    <section id="skills" class="my-2">

        <div class="container pt-5">
            <h2 class="text-center text-capitalize fw-light">Filter per Technologies</h2>
            <div class="d-flex justify-content-center flex-wrap py-2">
                <div role="button" class="badge rounded-0 text-bg-warning fs-5 py-2 px-4 m-1"
                    @click="this.fetchData(this.baseUrl + this.projectsApiPath)">
                    All
                </div>
                <div role="button" class="badge rounded-0 text-bg-warning fs-5 py-2 px-4 m-1" v-for="skill in this.skills"
                    @click="this.fetchTechnology(this.baseUrl + this.skillsApiPath + '/' + skill.slug + '/projects')">
                    {{ skill.name }}
                </div>
            </div>
        </div>
    </section>
    <div id="project_list" class="py-3">
        <div class="container">
            <div class="row" v-if="this.projects.length > 0" v-for="project in this.projects">
                <AppCard :project="project" />
            </div>

            <nav aria-label="Page navigation" class="d-flex justify-content-center my-3">
                <ul class="pagination">
                    <li class="page-item" :class="link.active ? 'active' : ''" aria-current="page"
                        v-for="link in this.links">
                        <a class="page-link" role="button" @click="this.fetchData(link.url)" v-html="link.label"></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectsHero from '../components/ProjectsHero.vue';
import AppCard from '../components/AppCard.vue';
import AppCardPlaceholder from '../components/AppCardPlaceholder.vue';

export default {
    name: 'ProjectsPage',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            projectsApiPath: '/api/projects',
            skillsApiPath: '/api/technologies',
            projects: [],
            skills: [],
            links: [],
        }
    },
    methods: {
        fetchData(url) {
            axios
                .get(url)
                .then(response => {
                    this.projects = response.data.projects.data;
                    this.links = response.data.projects.links;
                })
                .catch(error => {
                    console.error(error)
                })
        },
        fetchSkills(url) {
            axios
                .get(url)
                .then(response => {
                    this.skills = response.data.technologies;
                })
                .catch(error => {
                    console.error(error)
                })
        },
        fetchTechnology(url) {
            axios
                .get(url)
                .then(response => {
                    console.log('TECHNOLOGIES', response);
                    this.projects = response.data.technologies.data;
                    this.links = response.data.technologies.links;
                })
                .catch(error => {
                    console.error(error)
                })
        },
    },
    mounted() {
        this.fetchData(this.baseUrl + this.projectsApiPath)
        this.fetchSkills(this.baseUrl + this.skillsApiPath)
    },
    components: {
        ProjectsHero,
        AppCard,
        AppCardPlaceholder,
    }
}
</script>

<style lang="scss" scoped></style>