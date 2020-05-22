<template>
  <div class="analysis">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Analysis</p>
        </div>
      </div>
    </section>
    <p class="control">
      <input class="input" type="text" v-model="id" placeholder="studentid" />
      <button @click="recordById(id)" class="button is-success">show</button>
    </p>
    <div>
      <download-csv :data="users">Download Data</download-csv>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="a">
      <line-chart
        :data="HeightchartData"
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
Vue.component("downloadCsv", JsonCSV);

export default {
  name: "chart",
  data() {
    return {
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
};
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
</style>