<template>
    <div id="jumbotron" class="p-5 bg-secondary-subtle">
        <div class="container py-5 text-center text-lg-start">
            <h1 class="display-5 fw-bold text-center">Hi There!</h1>
            <p class="fs-4 text-center">This is Marco and here you can see all my projects!</p>
        </div>
    </div>
    <div id="project_list" class="py-3">
        <div class="container">

            <AppSkills :skills="this.skills" />

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 justify-content-center">
                <div v-if="this.projects.length > 0" class="col" v-for="project in  this.projects">
                    <AppCard :project="project" />
                </div>
                <AppCardPlaceholder v-else />
            </div>

            <nav aria-label="Page navigation" class="d-flex justify-content-center my-3">
                <ul class="pagination">
                    <li class="page-item" :class="link.active ? 'active' : ''" aria-current="page"
                        v-for="link in this.links">
                        <a class="page-link" role="button" @click="fetchData(link.url)" v-html="link.label"></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppCard from '../components/AppCard.vue'
import AppSkills from '../components/AppSkills.vue'
import AppCardPlaceholder from '../components/AppCardPlaceholder.vue'
export default {
    name: 'SingleTechnology',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            apiURI: '/api/technologies/',
            skillsApiURI: '/api/technologies',
            skills: [],
            links: [],
            projects: [],
        }
    },
    components: {
        AppCard,
        AppCardPlaceholder,
        AppSkills
    },
    methods: {
        fetchData(url) {
            axios
                .get(url)
                .then(response => {
                    console.log('PROJECTS', response);
                    this.projects = response.data.technologies.data;
                    this.links = response.data.technologies.links;
                })
                .catch(error => {
                    console.error(error)
                })
        },
        fetchSkills(url) {
            axios
                .get(url)
                .then(response => {
                    console.log('TECHS', response);
                    this.skills = response.data.technologies;
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    mounted() {
        this.fetchData(this.baseUrl + this.apiURI + this.$route.params.slug + '/projects')
        this.fetchSkills(this.baseUrl + this.skillsApiURI)
    }
}
</script>

<style lang="scss" scoped></style>