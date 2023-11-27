<template>
    <div id="jumbotron" class="bg_dark text-white py-5">
        <div class="container text-center text-lg-start my-0 my-lg-5">

            <div class="row">
                <div class="col-12 col-lg-6 d-flex flex-column justify-content-center mb-5 mb-lg-0">
                    <h1 class="display-1 fw-bold text-center mb-2 mb-lg-5">Hello!</h1>
                    <h1 class="fw-bold text-center"><span class="fs-4">I'm</span> <span class="text-warning">Marco
                            Zellini</span></h1>
                    <p class="fs-4 text-center py-3">Welcome to my portfolio</p>
                    <div class="d-flex">
                        <router-link class="btn btn_primary text-white mx-3 w-75" :to="{ name: 'projects' }">See
                            all
                            projects</router-link>
                        <router-link class="btn btn_primary text-white mx-3 w-75" :to="{ name: 'about' }">About
                            me</router-link>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <img class="img-fluid" src="../assets/img/undraw_freelancer_re_irh4.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHero'
}
</script>

<style lang="scss" scoped></style>