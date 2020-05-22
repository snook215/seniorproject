<template>
  <div class="collectdata2">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title has-text-white">Enter your student information</p>
        </div>
      </div>
    </section>

    <br />

    <!-- form input student information -->
    <div class="b">
      <div class="field is-centered">
        <label class="label">Student ID</label>
        <div class="control is-centered">
          <input class="input" type="text" v-model="studentid" placeholder="Student ID" />
        </div>
      </div>
      <label class="label">Name</label>
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input class="input" v-model="firstname" type="text" placeholder="Firstname" />
        </p>
        <p class="control is-expanded">
          <input class="input" v-model="lastname" type="text" placeholder="Lastname" />
        </p>
      </div>

      <div class="field">
        <div class="control">
          <label class="label">Gender</label>
          <label class="radio">
            <input type="radio" v-model="picked" value="Male" name="question"  />
            Male
          </label>
          <label class="radio">
            <input type="radio" v-model="picked" value="Female" name="question" />
            Female
          </label>
        </div>
      </div>

      <div class="field is-centered">
        <label class="label">Age</label>
        <div class="control is-centered">
          <input class="input" v-model="age" type="text" placeholder="Age" />
        </div>
      </div>

      <div class="control is-expanded">
        <label class="label">Grade</label>
        <div class="select">
          <select name="grade" @change="handleChange($event)" v-model="grade">
            <option value="0">Select student grade</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>

      <div class="field is-centered">
        <label class="label">Class</label>
        <div class="control is-centered">
          <input class="input" v-model="classr" type="text" placeholder="Class" />
        </div>
      </div>
    </div>

    <br />
    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <router-link to="/collectdata" class="button">Back</router-link>
      </p>
      <p class="control">
        <button @click="addStudent()" class="button is-success">Done</button>
      </p>
    </div>
    <br />
  </div>
</template>
 
<script>
import DataService from "../services/dataService";

export default {
  name: "collectdata",
  data() {
    return {
      picked: "",
      grade: "",
      schoolid: "1"
    };
  },
  methods: {
        handleChange(event) {
            console.log(event.target.value)
        },
         addStudent() {
      let obj = {
        studentid: this.studentid,
        name: this.firstname + " " + this.lastname,
        schoolid: this.schoolid,
        gender:this.picked,
        age: this.age,
        grade: this.grade,
        classr: this.classr
      }
      if (this.studentid != "" && this.firstname != "" && this.lastname != "" &&
          this.schoolid != "" && this.picked != "" && this.age != "" &&
          this.grade != "" && this.classr != "") {
        DataService.createStudent(obj)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
        alert("Add student " + this.firstname);
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