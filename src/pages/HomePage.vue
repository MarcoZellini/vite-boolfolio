<template>
    <AppHero />

    <!-- Projects Section -->

    <!-- <div id="project_list" class="py-3 bg-secondary-subtle">
        <div class="container">
            <h2 class="text-center text-uppercase py-2">Latest Projects</h2>
            <div class="row row-cols-1 row-cols-md-3 g-3 justify-content-center">
                <div v-if="this.latestProjects.length > 0" class="col" v-for="project in this.latestProjects">
                    <AppCard :project="project" />
                </div>
                <AppCardPlaceholder v-else />
            </div>
        </div>
    </div> -->


    <div id="latest_projects" class="mt-2">
        <div class="container">
            <h1 class="text-center my-4">Here you can check my last projects!</h1>
            <div class="row" v-if="this.latestProjects.length > 0" v-for="project in this.latestProjects">
                <AppCard :project="project" />
            </div>
        </div>
    </div>

    <!-- About Section -->

    <!-- Contacts Section -->


    <section id="skills" class="my-2">
        <div class="container">
            <h2 class="text-center text-uppercase pt-2">{{ this.$route.params.slug }} Technologies</h2>
            <div class="d-flex justify-content-center flex-wrap py-2">
                <div role="button" class="badge rounded-pil rounded-0 text-bg-warning fs-6 m-1" v-for="skill in this.skills"
                    @click="this.fetchData(this.baseUrl + this.skillsApiURI + '/' + skill.slug + '/projects')">
                    {{ skill.name }}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AppCard from '../components/AppCard.vue';
import AppHero from '../components/AppHero.vue';

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
                    //console.log(response);
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
        AppHero
    },
    mounted() {
        this.fetchProjects(this.baseUrl + this.latestProjectsApiURI)
        this.fetchSkills(this.baseUrl + this.skillsApiURI)
    },
}
</script>

<style lang="scss" scoped></style>