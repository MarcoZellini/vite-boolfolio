<template>
    <div id="jumbotron" class="p-5 bg-secondary-subtle">
        <div class="container py-5">
            <h1 class="display-5 fw-bold">Hi There!</h1>
            <p class="col-md-8 fs-4">This is Marco and here you can see who I am!</p>
        </div>
    </div>
    <section id="skills" class="my-4">
        <div class="container">
            <h2 class="text-center text-capitalize py-2">These are my Skills</h2>
            <div class="row row-cols-3 justify-content-evenly g-4 w-50 mx-auto py-3">
                <div class="col d-flex justify-content-center" v-for="skill in this.skills">
                    <div class="badge rounded-pill text-bg-warning fs-4">
                        {{ skill.name }}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div id="project_list" class="py-3 bg-secondary-subtle">
        <div class="container">
            <h2 class="text-capitalize py-2">Latest Projects</h2>
            <div class="row g-3 justify-content-center">
                <div class="col-4" v-for="project in this.latestProjects">
                    <AppCard :project="project" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppCard from '../components/AppCard.vue';
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
        AppCard
    },
    mounted() {
        this.fetchProjects(this.baseUrl + this.latestProjectsApiURI)
        this.fetchSkills(this.baseUrl + this.skillsApiURI)
    },
}
</script>

<style lang="scss" scoped></style>