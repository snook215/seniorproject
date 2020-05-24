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

      <p class="control has-text-centered">
        <input class="input has-text-centered-desktop" type="text" v-model="keyword" placeholder="studentid" /> 
        <br/>
        <br/>
        <button @click="recordById()" class="button is-success">show</button>
        <button @click="testShowData()" class="button is-success">test</button>

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
      data: {},
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
      console.log(""+ this.keyword);
      if(this.keyword != "" && this.keyword != undefined)  {
      DataService.getMeasureById(this.keyword)
        .then(response => {
          this.users = response.data;
          console.log(this.users.length)
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      alert("Please input your keyword");
    }
    },
    testShowData() {
      var i=0;
      var date;
      for (i=0; i< this.users.length; i++){
        date = this.users[i].created.split('T');
        this.data[date[0]] = this.users[i].height;
        console.log(""+this.data[date[0]])
      }
      for(var key in this.data){
        console.log(""+key)
      }
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