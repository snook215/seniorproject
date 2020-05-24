/* eslint-disable no-unused-vars */
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
// import AuthService from '../services/authService.js';
export default {
  data() {
    return {
      username: "",
      password: "",
      msg: 'test'
    };
  },
  methods: {
    login() {
        // eslint-disable-next-line no-unused-vars
        let obj = {
        username: this.username,
        password: this.password
      };
      if (this.username != "" && this.password != "") {
          if(this.username == "admin" && this.password == "admin"){
            alert("Admin - Login success!");
            this.$router.push('/Homeadmin')
          }
          else if (this.username == "staff" && this.password == "staff") {
            alert("Login success!");
            this.$router.push('/home');
          }
          else if (this.username == "testuser" && this.password == "testuser") {
            alert("Login success!");
            this.$router.push('/home');
          }
          else {
          alert("A username or password not correct");           
          }
      } else {
        alert("Please fill all required field");
      }
    }
      // try{
      // let credentials = {
      //     username: this.username,
      //     password: this.password
      //   };
      //   const response = await AuthService.login(credentials);
      //   this.msg = response.msg;
      //   alert("1."+this.msg)
      //   // eslint-disable-next-line no-unused-vars
      //   const token = response.token;
      //   // eslint-disable-next-line no-unused-vars
      //   const user = response.user;
        // AuthService.login(credentials)
        //   .then(response => {
        //     alert("1."+ response)
        //    // this.$router.push('/');
        //   })
        //   .catch(e => {
        //     alert("2."+ this.msg)
        //     this.msg = console.log(e);
        //   });
  //    }
  //     catch (error) {
  //       this.msg = error.response.data.msg;
  //       alert("2."+this.msg);
  //     }
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

