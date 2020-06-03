<template>
    <div class="csvupload">
      <Nav />
        <section class="hero">
        <div class="hero-body">
            <div class="container has-text-centered">
            <p class="title has-text-white">Enter your student information</p>
            </div>
        </div>
        </section>

        <!-- Start input csv file first row -->
        <br />

        <div class="a">
          <p class>Click on the "Choose File" button to upload a file:</p>
    <div>
    <br>
    <xls-csv-parser :columns="columns" @on-validate="onValidate" :help="help" lang="en"></xls-csv-parser>
    <br><br>
    <div class="results" v-if="results">
      <h3>Results:</h3>
      <pre>{{ results}}</pre>
    </div>
  </div>
 
              <div class="field is-grouped is-grouped-centered">
              <p class="control has-text-centered">
                <router-link to="/collectdata" class="button">Back</router-link>
              </p>
              <p class="control has-text-centered">
                <button @click="addData(results)" class="button is-success">Submit</button>
              </p>
            </div>
        </div>
    </div>
</template>


<script>
  import { XlsCsvParser } from 'vue-xls-csv-parser';
  import Nav from '../components/partials/Nav.vue';
    export default {
        components : {
      XlsCsvParser,
      Nav
    },
    methods: {
      onValidate(results) {
        this.results = results;
        console.log("",results.lenght)
      },
      addData(results) {
      // eslint-disable-next-line no-unused-vars
      let obj = {
        studentid: this.studentid,
        name: this.firstname + " " + this.lastname,
        schoolid: this.schoolid,
        gender:this.picked,
        age: this.age,
        grade: this.grade,
        classr: this.classr
      }       
        var i=0,j=0;
        if (results){
        for (i=0; i<results.lenght; i++){
          for(i=0; j<results; j++); 
          this.studentid = results[i].data[j];
          console.log(""+this.studentid)
        }
        } else{
        alert("Please select your file");
        }
      }
    },
    data() {
      return {
        columns: [
          { name: 'name', value: 'name' },
          { name: 'studentid', value: 'studentid' },
          { name: 'schoolid', value: 'schoolid' },
          { name: 'grade', value: 'grade' },
          { name: 'class', value: 'class'},
          { name: 'gender', value: 'gender' },
          { name: 'age', value: 'age'},
          { name: 'created', value: 'created'},
        ],
        results: null,
        help: 'Necessary columns are: Import file with required name, studentid, schoolid, grade, class, gender, age and created values',
      };
    },
  };
</script>

<style scoped>
.org-description {
  margin-top: 50px;
}
div.a {
  text-align: center;
}
.hero-body {
  background-color: rgb(204, 99, 204);
} 
</style>