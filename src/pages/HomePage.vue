<template>
    <HomeHero />

    <!-- Latest Projects Section -->
    <div id="latest_projects" class="mt-2">
        <div class="container py-4">
            <h1 class="text-center pb-4 m-0">Projects</h1>
            <h5 class="fw-light text-center pb-4 m-0">Here you can check some of my <span
                    class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">recent
                    works</span></h5>
            <!-- <h1 class="display-6 text-center mb-4">
                Here you can check my last projects!
            </h1> -->
            <div class="row" v-if="this.latestProjects.length > 0" v-for="project in this.latestProjects">
                <AppCard :project="project" />
            </div>
            <div class="projects_link d-flex pt-3">
                <router-link class="btn btn_primary text-white mx-auto w-25 text-capitalize" :to="{ name: 'projects' }">See
                    all</router-link>
            </div>
        </div>
    </div>

    <div class="spacer py-5"></div>

    <div id="about" class="bg_dark text-white py-5">
        <h1 class="text-warning text-center text-capitalize">about</h1>
        <div class="container">
            <div class="row">
                <div class="col-6 h-auto">
                    <div class="d-flex justify-content-center">
                        <img class="img-fluid mb-5" src="../assets/img/undraw_programming_re_kg9v.svg" alt="">
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex h-100 flex-column justify-content-center mx-5">
                        <p class="fs-2 text-center mb-5">
                            <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">discover
                                more
                                about
                                me</span>
                        <div class="fs-3">check out this link!</div>
                        </p>
                        <router-link class="btn btn_primary text-white py-2" :to="{ name: 'about' }">About
                            me</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="spacer py-3"></div>

    <!-- Contacts Section -->
    <div id="contacts">
        <h1 class="text-center text-capitalize mb-3">Contacts</h1>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="d-flex h-100 flex-column justify-content-center mx-5">
                        <p class="fs-2 text-center mb-5">
                            <span
                                class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">Send
                                me an Email</span>
                        <div class="fs-3">
                            using the contact format this link!
                        </div>
                        </p>
                        <router-link class="btn btn_primary text-white py-2" :to="{ name: 'contacts' }">Contact
                            me</router-link>
                    </div>
                </div>
                <div class="col-6 h-auto">
                    <div class="d-flex justify-content-center">
                        <img class="img-fluid" src="../assets/img/undraw_letter_re_8m03.svg" alt="">
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppCard from '../components/AppCard.vue';
import HomeHero from '../components/HomeHero.vue';

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
                    this.skills = response.data.technologies;
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    components: {
        AppCard,
        AppCardPlaceholder,
        HomeHero
    },
    mounted() {
        this.fetchProjects(this.baseUrl + this.latestProjectsApiURI)
        this.fetchSkills(this.baseUrl + this.skillsApiURI)
    },
}
</script>

<style lang="scss" scoped></style>