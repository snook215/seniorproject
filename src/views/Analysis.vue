<template>
  <div class="analysis">
    <Nav />
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Analysi--- test s</p>
        </div>
      </div>
    </section>
     <br />

      <p class="control has-text-centered">
        <input class="input has-text-centered-desktop" type="text" v-model="id" placeholder="studentid" /> 
        <br/>
        <br/>
        <button @click="recordById(id)" class="button is-success">show</button>
      </p>
      <br/>
      <div class="b has-text-centered">
        <download-csv :data="users">Download Data</download-csv>
      </div>

    <br />
    <br />
    <br />
    <br />

    <div class="a">
      <line-chart
        :data="data"
        xtitle="Date"
        ytitle="Height(cm)"
        width="600px"
        height="250px"
      ></line-chart>
      <line-chart
        :data="WeightchartData"
        xtitle="Date"
        ytitle="Weight(kg)"
        width="600px"
        height="250px"
      ></line-chart>
    </div>
  
  </div>
</template>


<script>
import DataService from "../services/dataService";
import Vue from "vue";
import JsonCSV from "vue-json-csv";
import Nav from '../components/partials/Nav.vue';
Vue.component("downloadCsv", JsonCSV);

export default {
  name: 'chart',
  components: {
    Nav
  },
  data() {
    return {
        data: [
    { x: 0, y: 300 },
    { x: 1, y: 700 },
    { x: 2, y: 450 },
    { x: 3, y: 750 },
    { x: 4, y: 450 }
  ],
      HeightchartData: {
        "2017-05-16": 150,
        "2017-06-16": 155,
        "2017-07-16": 158,
        "2017-08-16": 158,
        "2017-09-16": 158,
        "2017-10-16": 158,
        "2017-11-16": 160,
        "2017-12-16": 161
      },
      WeightchartData: {
        "2017-05-16": 43,
        "2017-06-16": 45,
        "2017-07-16": 48,
        "2017-08-16": 49,
        "2017-09-16": 50,
        "2017-10-16": 46,
        "2017-11-16": 48,
        "2017-12-16": 48,
        "2018-01-16": 60
      },
      users: []
    };
  },
  methods: {
    recordById() {
      DataService.getMeasureById(this.id)
        .then(response => {
          this.users = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

}
</script>


<style lang="scss" scoped>
  .org-description {
  margin-top: 50px;
  }
  .hero-body {
    background-color: rgb(204, 99, 204);
  }
  div.a {
    margin-top: 20px;
    margin-left: 500px;
  } 
  input {
    width: 30%;
  }
</style>