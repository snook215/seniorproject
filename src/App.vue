<template>
  <div id="app">
    <!-- <font-awesome-icon icon="user-secret" /> -->
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/partials/Nav.vue';
// import Login from "./views/Login";
import store from "./store";

export default {
  store,
  name: 'app',
  components: {
    Nav
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>