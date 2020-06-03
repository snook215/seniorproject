<template>
  <div class="analysis">
    <Nav />
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Analysis</p>
        </div>
      </div>
    </section>
    <br />

    <label class="label has-text-centered-desktop">Select</label>
    <div class="field has-addons has-addons-centered">
      <p class="control">
        <input class="input" type="text" v-model="keydata" placeholder="StudentID" />
      </p>
      <p class="control">
        <a class="button is-success" @click="recordById()">Done</a>
      </p>
    </div>
    <br />
    <div class="b has-text-centered">
      <download-csv :data="users">Download Data</download-csv>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="a is-centered">
      <line-chart
        id="chart"
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
      <line-chart
        :data="BMIchartData"
        xtitle="Date"
        ytitle="BMI"
        width="600px"
        height="250px"
      ></line-chart>

      <br>
      <br>

      <div class="table">
        <table class="table is-bordered">
          <thead>
              <tr>
                  <th>BMI kg/m^2</th>
                  <th>In line</th>
                  <th>Risk of disease</th>
              </tr>
          </thead>

          <tbody>
              <tr>
                  <th> under 18.5 </th>
                  <th> Underweight</th>
                  <th>More than normal people</th>
              </tr>
              <tr>
                  <th>18.5-24.90</th>
                  <th>Normal weight</th>
                  <th>Equal to normal people</th>
              </tr>
              <tr>
                  <th>25-29.90</th>
                  <th>Overweight</th>
                  <th>Danger level 1</th>
              </tr>
              <tr>
                  <th>30 or greater</th>
                  <th>Obesity</th>
                  <th>Danger level 2</th>
              </tr>
        </tbody>
        </table>
    </div>
    </div>
  </div>
</template>


<script>
import DataService from "../services/dataService";
import Vue from "vue";
import JsonCSV from "vue-json-csv";
import Nav from "../components/partials/Nav.vue";
Vue.component("downloadCsv", JsonCSV);

export default {
  name: "chart",
  components: {
    Nav
  },
  data() {
    return {
      height: {},
      weight: {},
      keydata: "",
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
        "2017-05-16": 40,
        "2017-06-16": 43,
        "2017-07-16": 45,
        "2017-08-16": 49,
        "2017-09-16": 50,
        "2017-10-16": 53,
        "2017-11-16": 57,
        "2017-12-16": 60,
      },
      BMIchartData: {
        "2017-05-16": 17.78,
        "2017-06-16": 17.89,
        "2017-07-16": 18.02,
        "2017-08-16": 18.02,
        "2017-09-16": 18.02,
        "2017-10-16": 18.02,
        "2017-11-16": 22.265,
        "2017-12-16": 23.14,
      },
      users: []
    };
  },
  methods: {
    recordById() {
      // console.log(""+ this.keyword);
      if (this.keydata != "" && this.keydata != undefined) {
        DataService.getMeasureById(this.keydata)
          .then(response => {
            this.users = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        alert("Please input your keyword");
      }
    },
    testShowData() {
      var i = 0;
      var date;
      for (i = 0; i < this.users.length; i++) {
        date = this.users[i].created.split("T");
        // this.height[date[0]] = this.users[i].height;
        this.height[i] = this.users[i].height;
        // console.log(""+this.height[date[0]])
        // console.log(""+date[0])
      }
      console.log(this.height);
      console.log(this.HeightchartData);
      for (i = 0; i < this.users.length; i++) {
        date = this.users[i].created.split("T");
        this.weight[date[0]] = this.users[i].weight;
        // console.log(""+this.weight[date[0]])
        // console.log(""+date[0])
      }
      // this.height.update();
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