<script>
export default {
    name: 'AppFooter',
}
</script>

<template>
    <footer id="app_footer" class="bg-dark text-light py-3">
        <div id="quick_links">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2">
                    <div class="col d-flex flex-column align-items-center">
                        <router-link class="nav-link py-2" :to="{ name: 'home' }">Home</router-link>
                        <router-link class="nav-link py-2" :to="{ name: 'projects' }">Projects</router-link>
                        <router-link class="nav-link py-2" :to="{ name: 'about' }">About Me</router-link>
                        <router-link class="nav-link py-2" :to="{ name: 'contacts' }">Contact Me</router-link>
                    </div>
                    <div class="col d-flex flex-column align-items-center text-white">
                        <div class="py-2">Email: </div>
                        <div class="py-2">Phone: </div>
                        <div class="py-2"><a href="https://www.linkedin.com/in/marco-zellini/"
                                class="text-decoration-none text-white">Linkedin</a></div>
                        <div class="py-2">Lorem</div>
                    </div>
                </div>
            </div>
        </div>
        <h6 class="text-center text-uppercase m-0">&copy; 2023 Zellini Marco</h6>
    </footer>
    <!-- /#app_footer -->
</template>

<style lang="scss" scoped></style>