<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header id="app_header">
        <nav class="navbar navbar-expand-sm navbar-dark bg_primary py-3">
            <div class="container d-flex align-items-center justify-content-between">
                <a class="navbar-brand text-center text-warning fw-bold" href="/">Zellini Marco</a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse align-items-center justify-content-end" id="collapsibleNavId">
                    <ul class="navbar-nav text-center">
                        <li class="nav-item">
                            <router-link class="nav-link mx-1" active-class="active" :to="{ name: 'home' }">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link mx-1" active-class="active" :to="{ name: 'projects' }">
                                Projects
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link mx-1" active-class="active" :to="{ name: 'about' }">
                                About me</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link mx-1 me-0" active-class="active" :to="{ name: 'contacts' }">
                                Contact Me
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!-- /#app_header -->
</template>


<style lang="scss" scoped></style>