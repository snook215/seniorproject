<!-- Feature Login branch!-->
<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered is-size-3 has-text-white">Child Growth</h1>
        <div class="columns is-centered">
          <div class="column is-4-desktop is-5-widescreen">
            <form action class="box">
              <div class="field">
                <label for class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    type="text"
                    placeholder="e.g. onnicha99"
                    v-model="username"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    placeholder="*******"
                    v-model="password"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div class="field has-text-centered">
                <label for class="label">{{ msg }}</label>
                <button class="button is-success" @click="login()">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AuthService from '../services/authService.js';
export default {
  data() {
    return {
      username: "",
      password: "",
      msg: ''
    };
  },
  methods: {
     login() {
      let credentials = {
          username: this.username,
          password: this.password
        };
        AuthService.login(credentials)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            this.msg = console.log(e);
          });
        this.$router.push('/');
     }
  }
};
</script>
<style type="text/css" scoped>
.hero {
  height: 100vh;
  position: relative;
  background-color: rgb(204, 99, 204);
}
</style>

