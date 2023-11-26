<script>
import axios from 'axios';
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
                    //console.log('PROJECTS', response);
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
                    //console.log('TECHS', response);
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
        AppCard,
        AppCardPlaceholder,
    }
}
</script>

<template>
    <div id="jumbotron" class="p-5 bg-secondary-subtle">
        <div class="container py-5 text-center text-lg-start">
            <h1 class="display-5 fw-bold text-center">Hi There!</h1>
            <p class="fs-4 text-center">This is Marco and here you can see all my projects!</p>
        </div>
    </div>
    <div id="project_list" class="py-3">
        <div class="container">
            <section id="skills" class="my-2">
                <div class="container">
                    <h2 class="text-center text-uppercase pt-2"> Technologies</h2>
                    <!-- <div v-if="this.skills.length > 0">{{ this.baseUrl + this.skillsApiPath + '/' + this.skills[0].slug +
                        '/projects' }}</div> -->
                    <div class="d-flex justify-content-center flex-wrap py-2">
                        <div role="button" class="badge rounded-pill text-bg-warning fs-6 m-1"
                            @click="this.fetchData(this.baseUrl + this.projectsApiPath)">
                            All
                        </div>
                        <div role="button" class="badge rounded-pill text-bg-warning fs-6 m-1" v-for="skill in this.skills"
                            @click="this.fetchTechnology(this.baseUrl + this.skillsApiPath + '/' + skill.slug + '/projects')">
                            {{ skill.name }}
                        </div>
                    </div>

                </div>
            </section>
            <h2 class="text-center text-uppercase pt-2">Project List</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 justify-content-center" v-if="this.projects">
                <div v-if="this.projects.length > 0" class="col" v-for="project in  this.projects">
                    <AppCard :project="project" />
                </div>
                <AppCardPlaceholder v-else />
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



<style lang="scss" scoped></style>