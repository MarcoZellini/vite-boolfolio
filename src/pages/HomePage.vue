<template>
    <div id="jumbotron" class="p-5 bg-secondary-subtle">
        <div class="container py-5 text-center text-lg-start">
            <h1 class="display-5 fw-bold">Hi There!</h1>
            <p class="fs-4 text-center">This is Marco and here you can see who I am!</p>
        </div>
    </div>
    <section id="skills" class="my-2">
        <div class="container">
            <h2 class="text-center text-uppercase py-2">These are my Skills</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-md justify-content-evenly g-4 w-50 mx-auto pt-4 pb-3">
                <div class="col d-flex justify-content-center mt-0 my-1 mb-1" v-for="skill in this.skills">
                    <div class="badge rounded-pill text-bg-warning fs-6 w-100 my-1">
                        {{ skill.name }}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div id="project_list" class="py-3 bg-secondary-subtle">
        <div class="container">
            <h2 class="text-center text-uppercase py-2">Latest Projects</h2>
            <div class="row row-cols-1 row-cols-md-3 g-3 justify-content-center">
                <div v-if="this.latestProjects.length > 0" class="col" v-for="project in this.latestProjects">
                    <AppCard :project="project" />
                </div>
                <AppCardPlaceholder v-else />
            </div>
        </div>
    </div>
</template>

<script>
import AppCard from '../components/AppCard.vue';
import AppCardPlaceholder from '../components/AppCardPlaceholder.vue';
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            latestProjectsApiURI: '/api/projects/latest',
            skillsApiURI: '/api/technologies',
            latestProjects: [],
            skills: [],
            latestProjects: [],
        }
    },
    methods: {
        fetchProjects(url) {
            axios
                .get(url)
                .then(response => {
                    this.latestProjects = response.data.projects;
                })
                .catch(error => {
                    console.error(error)
                })
        },
        fetchSkills(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.skills = response.data.technologies;
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    components: {
        AppCard,
        AppCardPlaceholder
    },
    mounted() {
        this.fetchProjects(this.baseUrl + this.latestProjectsApiURI)
        this.fetchSkills(this.baseUrl + this.skillsApiURI)
    },
}
</script>

<style lang="scss" scoped></style>