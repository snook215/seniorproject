<template>
  <div class="Studentdata">
    <Nav />
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title has-text-white">Student Data</p>
        </div>
      </div>
    <br />
    <br />
    </section>
    <label class="label has-text-centered-desktop">Select</label>
        <div class="field has-addons has-addons-centered">
          <p class="control">
            <span class="select">
              <select v-model="fillter">
                <option value="0">All</option>
                <option value="1">studentid</option>
                <option value="3">Age</option>
                <option value="4">schoolid</option>
              </select>
            </span>
          </p>
          <p class="control">
            <input class="input" type="text" v-model="keydata" placeholder="keyword">
          </p>
          <p class="control">
            <a class="button is-success" @click="retrieveUsersfillter()">
              Done
            </a>
          </p>
        </div>
    <div class="has-text-centered">
      <download-csv :data="users">Download Data</download-csv>
    </div>

    <br />
    <br />
    <br />

    <div class="table">
      <table class="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Student ID</th>
            <th>Name</th>
            <th>School</th>
            <th>Grade</th>
            <th>Class</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item , index) in users" :key="item.id">
            <th>{{index+1}}</th>
            <th>{{item.studentid}}</th>
            <td>{{item.name}}</td>
            <td>{{ "KMUTT"}}</td>
            <td>{{item.grade}}</td>
            <td>{{item.class}}</td>
            <td>{{item.age}}</td>
            <td>{{item.gender}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <br />
    <br />
    <br />

    <div class="field is-centered">
      <p class="control has-text-centered">
        <router-link to="/editstudent" class="button is-info">Edit</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import DataService from "../services/dataService";
import Nav from "../components/partials/Nav.vue";
import Vue from "vue";
import JsonCSV from "vue-json-csv";
Vue.component("downloadCsv", JsonCSV);

export default {
  name: "app",
  components: {
    Nav
  },
  data() {
    return {
      users: [],
      schools: [],
      fillter: "0"
    };
  },
  mounted() {
    this.retrieveUsers();
  },
  methods: {
    retrieveUsers() {
      DataService.getStudent()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrieveUsersfillter() {
      if (this.fillter == 0) {
        DataService.getStudent()
          .then(response => {
            this.users = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      } else if (this.fillter == 1) {
        DataService.getStudentById(this.keydata)
          .then(response => {
            this.users = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
        // } else if (this.fillter == 2) {
        //   DataService.getStudentByGender(this.keydata)
        //     .then(response => {
        //       this.users = response.data;
        //       console.log(response.data);
        //     })
        //     .catch(e => {
        //       console.log(e);
        //     });
      } else if (this.fillter == 3) {
        DataService.getStudentByAge(this.keydata)
          .then(response => {
            this.users = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      } else if (this.fillter == 4) {
        DataService.getStudentBySchoolId(this.keydata)
          .then(response => {
            this.users = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.hero-body {
  background-color: rgb(204, 99, 204);
}
table {
  margin-left: auto;
  margin-right: auto;
}
</style>