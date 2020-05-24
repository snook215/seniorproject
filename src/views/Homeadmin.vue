<template>
  <div class="homeadmin">
    <NavAdmin />
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Welcome to Child Growth</h1>
          <h2 class="subtitle">You are Admin</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavAdmin from "../components/partials/NavAdmin.vue";

export default {
  components: {
    NavAdmin
  }
};
</script>
<style lang="scss" scoped>
.org-description {
  margin-top: 50px;
}
.hero-body {
  background-color: rgb(204, 99, 204);
}
</style>