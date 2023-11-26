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
    <div class="col-12 my-3 shadow">
        <div class="row">
            <div class="col-4">
                <div class="card-image">
                    <img :src="this.baseUrl + '/storage/' + project.cover_image" class="img-fluid h-75" alt="...">
                </div>
            </div>
            <div class="col-8 d-flex justify-content-between">
                <div class="card-info">
                    <h2 class="text-capitalize m-0 mt-2">{{ project.title.replaceAll('-', ' ') }}</h2>
                    <small>
                        Pubblicato :
                        {{
                            `
                        ${new Date(Date.parse(project.created_at)).getDate()}/${new
                                Date(Date.parse(project.created_at)).getMonth()}/${new
                                    Date(Date.parse(project.created_at)).getFullYear()}
                        `
                        }}
                    </small>
                    <h5 class="mt-5">Description: </h5>
                    <h6 class="card-text placeholder-glow text-break">
                        {{ project.description }}
                    </h6>
                </div>
                <div class="card_links ps-3 mb-3 d-flex align-items-end">
                    <div class="row">
                        <div class="col">
                            <router-link
                                class="my-1 btn btn-dark text-white d-flex h-100 justify-content-center align-items-center"
                                :to="{
                                    name: 'single-project',
                                    params: { slug: project.slug }
                                }">
                                View Project
                            </router-link>
                        </div>
                        <div class="col" aria-disabled="true">
                            <a :href="project.website_link"
                                class="my-1 btn btn-primary d-flex h-100 justify-content-center align-items-center"
                                target="_blank">
                                Website link
                            </a>
                        </div>
                        <div class="col" aria-disabled="true">
                            <a :href="project.github_link"
                                class="my-1 btn btn-dark text-white d-flex h-100 justify-content-center align-items-center"
                                target="_blank">
                                GitHub Link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>