<script>
export default {
    name: 'AppCard',
    props: {
        'project': Object
    },
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
        }
    }
}
</script>

<template>
    <!-- <div class="card h-100">
        <div class="card-header h-100 d-flex flex-column justify-content-around">
            <h3 class="text-center text-truncate m-0 p-2">{{ project.title }}</h3>
            <span class="badge rounded-pill text-bg-warning w-50 m-auto mt-2 mb-3">{{ project.type.name }}</span>
            <div class="d-flex justify-content-center flex-wrap">
                <small class="badge rounded-pill text-bg-primary m-1" v-for="technology in project.technologies">{{
                    technology.name }}</small>
            </div>
            <div class="d-flex flex-column justify-content-around py-2">
                <router-link class="my-1 btn btn-dark text-white" :to="{
                    name: 'single-project',
                    params: { slug: project.slug }
                }">
                    View Project</router-link>
                <a :href="project.website_link" class="my-1 btn btn-primary">
                    Website link
                </a>
                <a :href="project.github_link" class="my-1 btn btn-dark text-white">
                    GitHub Link
                </a>
            </div>
        </div>
        <img :src="this.baseUrl + '/storage/' + project.cover_image" alt="" class="card-img-bottom">
    </div> -->
    <div class="card h-100" aria-hidden="true">
        <img :src="this.baseUrl + '/storage/' + project.cover_image" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title placeholder-glow">
                <span class="col-6">
                    <h3 class="text-truncate m-0 py-2">{{ project.title }}</h3>
                </span>
            </h5>
            <p class="card-text placeholder-glow">
                {{ project.description }}
            </p>
            <div class="row row-cols-1 row-cols-xl-3 links">
                <div class="col">
                    <router-link class="my-1 btn btn-dark text-white w-100" :to="{
                        name: 'single-project',
                        params: { slug: project.slug }
                    }">
                        View Project
                    </router-link>
                </div>
                <div class="col" aria-disabled="true">
                    <a :href="project.website_link" class="my-1 btn btn-primary w-100">
                        Website link
                    </a>
                </div>
                <div class="col" aria-disabled="true">
                    <a :href="project.github_link" class="my-1 btn btn-dark text-white w-100">
                        GitHub Link
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>