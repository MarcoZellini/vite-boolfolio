<script>
import axios from 'axios';


export default {
  name: 'App',
  data() {
    return {
      baseUrl: 'http://127.0.0.1:8000',
      apiURI: '/api/projects',
      projects: [],
      currentPage: 1,
      lastPage: null
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.lastPage) {
        axios
          .request({
            baseURL: this.baseUrl,
            url: this.apiURI,
            params: {
              page: ++this.currentPage
            }
          })
          .then(response => {
            console.log(response.data.projects.data);
            this.projects = response.data.projects.data;
          })
          .catch(error => {
            console.error(error)
          })
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        axios
          .request({
            baseURL: this.baseUrl,
            url: this.apiURI,
            params: {
              page: --this.currentPage
            }
          })
          .then(response => {
            console.log(response.data.projects.data);
            this.projects = response.data.projects.data;
          })
          .catch(error => {
            console.error(error)
          })
      }
    }
  },
  mounted() {
    axios
      .get(this.baseUrl + this.apiURI)
      .then(response => {
        console.log(response);
        this.projects = response.data.projects.data;
        this.lastPage = response.data.projects.last_page
      })
      .catch(error => {
        console.error(error)
      })
  }
}

</script>

<template>
  <header id="app_header">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">Boolfolio</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="/" aria-current="page">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacts</a>
            </li>
          </ul>
          <form class="d-flex my-2 my-lg-0">
            <input class="form-control me-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <!-- /#app_header -->
  <main id="app_main">
    <div id="jumbotron" class="p-5 mb-4 bg-light rounded-3">
      <div class="container py-5">
        <h1 class="display-5 fw-bold">Hi There!</h1>
        <p class="col-md-8 fs-4">This is Marco and here you can see all my projects!</p>
      </div>
    </div>
    <div id="project_list" class="py-3">
      <div class="container">
        <div class="d-flex justify-content-between p-2">
          <button type="button" class="btn btn-primary" @click="prevPage">Prev</button>
          <h4>{{ this.currentPage }}</h4>
          <button type="button" class="btn btn-primary" @click="nextPage">Next</button>
        </div>
        <div class="row g-3 justify-content-center">
          <div class="col-4" v-for="project in  projects ">
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
                  <a :href="project.github_link" class="btn btn-dark text-white">
                    GitHub Link
                  </a>
                </div>
              </div>
              <img :src="this.baseUrl + '/storage/' + project.cover_image" alt="" class="card-img-bottom">
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- /#app_main -->
  <footer id="app_footer" class="bg-dark text-light py-3">
    <h6 class="text-center text-uppercase m-0">&copy; 2023 Zellini Marco</h6>
  </footer>
  <!-- /#app_footer -->
</template>

<style></style>
