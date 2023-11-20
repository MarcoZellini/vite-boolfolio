<template>
    <div id="jumbotron" class="p-5 bg-secondary-subtle">
        <div class="container py-5">
            <h1 class="display-5 fw-bold">Hi There!</h1>
            <p class="col-md-8 fs-4">This is Marco and here you can see all my projects!</p>
        </div>
    </div>
    <div id="project_list" class="py-3 bg-secondary-subtle">
        <div class="container">

            <div class="row g-3 justify-content-center">
                <div class="col-4" v-for="project in  this.projects ">
                    <AppCard :project="project" />
                </div>
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
import AppCard from '../components/AppCard.vue';

export default {
    name: 'ProjectsPage',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            apiURI: '/api/projects',
            projects: [],
            links: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        fetchData(url) {
            axios
                .get(url)
                .then(response => {
                    this.projects = response.data.projects.data;
                    this.lastPage = response.data.projects.last_page;
                    this.links = response.data.projects.links;
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    mounted() {
        this.fetchData(this.baseUrl + this.apiURI)
    },
    components: {
        AppCard
    }
}
</script>

<style lang="scss" scoped></style>