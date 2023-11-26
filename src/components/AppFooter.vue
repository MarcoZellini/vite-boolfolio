<script>
export default {
    name: 'AppFooter',
}
</script>

<template>
    <footer id="app_footer" class="bg_dark text-light py-4">
        <div id="quick_links">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 d-flex flex-column align-items-center justify-content-around">
                        <a href="https://www.linkedin.com/in/marco-zellini/"
                            class="d-inline-block my-2 w-75 mx-auto text-decoration-none text-center">
                            Linkedin
                        </a>
                        <a href="https://github.com/MarcoZellini"
                            class="d-inline-block my-2 w-75 mx-auto text-decoration-none text-center">
                            GitHub
                        </a>
                    </div>
                    <div class="col-12 col-md-4 d-flex flex-column align-items-center justify-content-around">
                        <router-link class="d-inline-block my-2 w-75 mx-auto text-decoration-none text-center"
                            :to="{ name: 'home' }">Home</router-link>
                        <router-link class="d-inline-block my-2 w-75 mx-auto text-decoration-none text-center"
                            :to="{ name: 'projects' }">Projects</router-link>
                        <router-link class="d-inline-block my-2 w-75 mx-auto text-decoration-none text-center"
                            :to="{ name: 'about' }">About
                            Me</router-link>
                        <router-link class="d-inline-block my-2 w-75 mx-auto text-decoration-none text-center"
                            :to="{ name: 'contacts' }">Contact
                            Me</router-link>
                    </div>
                    <div class="col-12 col-md-4 d-flex flex-column align-items-center justify-content-around px-5">
                        <div class="text-center footer_contacts w-100">Email: zellinimarco@gmail.com</div>
                        <div class="text-center footer_contacts w-100">Phone: +39 388 782 1800</div>
                    </div>

                </div>
            </div>
        </div>
        <h6 class="text-center text-uppercase pt-3 m-0">&copy; 2023 <span class="text-warning">Zellini Marco</span></h6>
    </footer>
    <!-- /#app_footer -->
</template>

<style lang="scss" scoped></style>