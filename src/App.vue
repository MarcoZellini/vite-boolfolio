<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />

  <main id="app_main">
    <router-view></router-view>
  </main>
  <!-- /#app_main -->

  <AppFooter />
</template>

<style></style>
