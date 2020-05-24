<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Child Growth</strong>
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/studentdata" class="navbar-item">Show student</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Collect Data </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="/collectdata">
              Student data
            </a>
            <a class="navbar-item" href="/addrecord">
              student measurement
            </a>
          </div>
        </div>
        <router-link to="/analysis" class="navbar-item">Analysis</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/" class="button is-dark">log out</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
    alert() {
      alert("Log out success");
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  margin-top: 25px;
  margin-bottom: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #d88d00;
    }
  }
}
</style>