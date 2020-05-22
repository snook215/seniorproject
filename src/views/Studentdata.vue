<template>
    <div class="Studentdata">
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                <p class="title has-text-white">Student Data</p>
                </div>
            </div>
        </section>
        
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

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
    </div>
</template>
<script>
import DataService from "../services/dataService";

export default {
name: "app",
  data() {
    return {
      users: [],
      schools: []
    }
  },
  mounted() {
    this.retrieveUsers();
    this.retrieveSchools();
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
    retrieveSchools() {
      DataService.getSchool(this.users[0].schoolid)
        .then(response => {
          this.schools = response.name;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
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