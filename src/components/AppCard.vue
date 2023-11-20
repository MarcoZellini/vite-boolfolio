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
    <div class="card h-100">
        <div class="card-header h-100 d-flex flex-column justify-content-around">
            <h3 class="text-center text-truncate">{{ project.title }}</h3>
            <span class="badge rounded-pill text-bg-warning">{{ project.type.name }}</span>
            <div class="d-flex justify-content-center flex-wrap">
                <small class="badge rounded-pill text-bg-primary m-1" v-for="technology in project.technologies">{{
                    technology.name }}</small>
            </div>
            <div class="d-flex justify-content-around py-1">
                <a :href="project.website_link" class="btn btn-primary">
                    Website link
                </a>
                <router-link class="btn btn-dark text-white"
                    :to="{ name: 'single-project', params: { slug: project.slug } }">View Project</router-link>
                <a :href="project.github_link" class="btn btn-dark text-white">
                    GitHub Link
                </a>
            </div>
        </div>
        <img :src="this.baseUrl + '/storage/' + project.cover_image" alt="" class="card-img-bottom">
    </div>
</template>


<style lang="scss" scoped></style>