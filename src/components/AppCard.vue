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
    <div class="col-10 mx-auto my-2 shadow bg_primary text-white">
        <div class="row mx-1 my-3">
            <div class="col-4 ps-0">
                <div class="card-image">
                    <img :src="this.baseUrl + '/storage/' + project.cover_image" class="img-fluid h-75" alt="...">
                </div>
            </div>
            <div class="col-8">
                <div class="row h-100">
                    <div class="col-6">
                        <div class="project-info">
                            <h2 class="text-capitalize m-0 my-2">{{ project.title.replaceAll('-', ' ') }}</h2>
                            <div role="button" class="badge rounded-pil rounded-0 text-bg-primary fs-6 me-1">
                                {{ project.type ? project.type.name : 'untyped' }}
                            </div>
                            <small>
                                Pubblicato :
                                {{
                                    `${new Date(Date.parse(project.created_at)).getDate()}/${new
                                        Date(Date.parse(project.created_at)).getMonth()}/${new
                                            Date(Date.parse(project.created_at)).getFullYear()}`
                                }}
                            </small>

                            <div class="project-technologies py-1">
                                <div class="d-flex justify-content-start flex-wrap py-2">
                                    <div role="button"
                                        class="badge rounded-pil rounded-0 text-bg-warning fs-6 me-1 mt-1 bg_warning"
                                        v-for="technology in project.technologies"
                                        @click="this.fetchData(this.baseUrl + this.skillsApiURI + '/' + skill.slug + '/projects')">
                                        {{ technology.name }}
                                    </div>
                                </div>
                            </div>
                            <h5 class="">Description: </h5>
                            <h6 class="card-text placeholder-glow text-break">
                                {{ project.description }}
                            </h6>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card_links h-100">
                            <div class="row flex-column justify-content-around h-100 mx-1">
                                <router-link
                                    class="btn btn-dark text-white d-flex justify-content-center align-items-center w-100"
                                    :to="{
                                        name: 'single-project',
                                        params: { slug: project.slug }
                                    }">
                                    View Project
                                </router-link>
                                <a :href="project.website_link"
                                    class="btn btn-primary d-flex justify-content-center align-items-center w-100"
                                    target="_blank">
                                    Website link
                                </a>
                                <a :href="project.github_link"
                                    class="btn btn-dark text-white d-flex justify-content-center align-items-center w-100"
                                    target="_blank">
                                    GitHub Link
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>