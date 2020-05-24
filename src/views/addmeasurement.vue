<template>
  <div class="collectdata2">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title has-text-white">Measurement record</p>
        </div>
      </div>
    </section>

    <br />

    <!-- form input student information -->
    <div class="b">
      <div class="field is-centered">
        <label class="label">Student ID</label>
        <div class="control is-centered">
          <input class="input" v-model="studentid" type="text" placeholder="Student ID" />
        </div>
      </div>

      <label class="label">Weight and Hight</label>
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input class="input" v-model="weight" type="text" placeholder="Weight" />
        </p>
        <p class="control is-expanded">
          <input class="input" v-model="height" type="text" placeholder="Hight" />
        </p>
      </div>
    </div>

    <br />
    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <router-link to="/collectdata" class="button">Back</router-link>
      </p>
      <p class="control">
        <button @click="addRecord()" class="button is-success">Done</button>
      </p>
    </div>
    <br />
  </div>
</template>
 
 <script>
import dataService from "../services/dataService";

export default {
  methods: {
    addRecord() {
      let obj = {
        studentid: this.studentid,
        height: this.height,
        weight: this.weight,
        result: "normal"
      };
      if (this.studentid != "" && this.height != "" && this.weight) {
        dataService
          .measureRecord(obj)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });

        alert("Add record for id: " + this.studentid);
        this.$router.push('/');          
      } else {
        alert("Please Fill All Required Field");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.org-description {
  margin-top: 50px;
}
div.a {
  text-align: center;
}
div.b {
  margin-top: 20px;
  margin-right: 100px;
  margin-left: 100px;
}
.hero-body {
  background-color: rgb(204, 99, 204);
}
</style>