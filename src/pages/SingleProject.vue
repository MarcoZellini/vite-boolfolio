<template>
    <div class="p-5 bg-light" v-if="this.querySuccessed">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 fs-6">
                <div class="col py-5">
                    <img :src="this.baseUrl + '/storage/' + this.project.cover_image" alt="">
                </div>
                <div class="col">
                    <div class="container py-5">
                        <div class="my-1">
                            <span class="badge rounded-pill text-bg-warning text-center w-100">
                                {{ this.project.type_id != null ? this.project.type_id : 'untyped' }}
                            </span>
                        </div>
                        <h1 class="display-5 fw-bold">#{{ this.project.id }} - {{ this.project.title }}</h1>
                        <div class="my-1 d-flex justify-content-center flex-wrap">
                            <span class="badge rounded-pill text-bg-primary m-1"
                                v-for="technology in this.project.technologies">
                                {{ technology.name }}
                            </span>
                        </div>
                        <p class="col-md-8 text-center w-100">{{ this.project.description }}</p>

                        <div class="row">
                            <div class="col">
                                <a :href="this.project.website_link"
                                    class="btn btn-lg btn-warning text-decoration-none text-dark fs-6 d-block">
                                    Website Link
                                </a>
                            </div>
                            <div class="col">
                                <a :href="this.project.github_link"
                                    class="btn btn-lg btn-dark text-decoration-none text-white fs-6 d-block">
                                    GitHub Link
                                </a>
                            </div>
                        </div>



                        <ul class="d-flex p-0">
                            <li class="list-unstyled me-2">

                            </li>
                            <li class="list-unstyled">

                            </li>
                        </ul>


                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>Error</div>
</template>

<script>
import axios from 'axios';
import { router } from '../router.js'

export default {
    name: 'SingleProject',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            apiURI: '/api/projects/' + this.$route.params.slug,
            project: null,
            querySuccessed: false
        }
    },
    methods: {
        fetchData(url) {
            axios
                .get(url)
                .then(response => {
                    if (response.data.success) {
                        this.querySuccessed = true
                        this.project = response.data.project;
                    } else {
                        router.push({ name: 'not-found' })
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    mounted() {
        this.fetchData(this.baseUrl + this.apiURI);
    }
}
</script>

<style lang="scss" scoped></style>