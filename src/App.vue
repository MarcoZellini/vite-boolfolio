<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppCard from './components/AppCard.vue'

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
  components: {
    AppHeader,
    AppFooter,
    AppCard
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
  <AppHeader />

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
            <AppCard :project="project" />
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- /#app_main -->
  <AppFooter />
</template>

<style></style>
