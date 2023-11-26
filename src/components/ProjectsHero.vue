<template>
    <div id="jumbotron" class="bg_dark text-white py-5">
        <div class="container text-center text-lg-start">
            <div class="row">
                <div class="col-6 d-flex flex-column justify-content-center">
                    <h1 classs="display-1">Check out my <span
                            class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">projects!</span>
                    </h1>
                    <p class="fs-4">
                        Here you can see all my <span
                            class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">works</span>
                        and filter them based on the <span
                            class="d-inline-block mx-auto fw-bold text-warning bg_primary px-2 py-1 rounded-1 text-capitalize my-2">technology</span>
                        used.
                    </p>
                </div>
                <div class="col-6">
                    <img class="img-fluid px-5 my-4" src="../assets/img/undraw_laravel_and_vue_-59-tp.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectsHero'
}
</script>

<style lang="scss" scoped></style>