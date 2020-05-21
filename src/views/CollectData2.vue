<template>
  <div class="collectdata2">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Enter your student information</p>
        </div>
      </div>
    </section>

<!-- choose plan -->
<br/>
 
   <!--  <div id="file-js-example " class="file has-name is-info is-centered">
      <label class="file-label">
        <input class="file-input" type="file" name="resume">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">Choose a file…</span>
        </span>
        <span class="file-name">No file uploaded</span>
      </label>
    </div>       
      <p class="help has-text-centered">Import your .csv file</p> -->
    
    
    <!-- form input student information -->
    <div class="b">
      <div class="field is-centered">
        <label class="label">Student ID</label>
        <div class="control is-centered">
          <input class="input" type="text" placeholder="Student ID" />
        </div>
      </div>
      <label class="label">Name</label>
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Firstname" />
        </p>
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Lastname" />
        </p>
      </div>

      <div class="field">
        <div class="control">
          <label class="label">Gender</label>
          <label class="radio">
            <input type="radio" name="question" />
            Male
          </label>
          <label class="radio">
            <input type="radio" name="question" />
            Female
          </label>
        </div>
      </div>

      <div class="field is-centered">
        <label class="label">Age</label>
        <div class="control is-centered">
          <input class="input" type="text" placeholder="Age" />
        </div>
      </div>

      <div class="control is-expanded">
        <label class="label">Grade</label>
        <div class="select">
          <select name="grade">
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
          <input class="input" type="text" placeholder="Class" />
        </div>
      </div>

    </div>

    <br/>
      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <router-link to="/collectdata" class="button">Back</router-link>
        </p>
        <p class="control">
          <button class="button is-info ">Add more student</button>
          <!-- <router-link to="/collectdata" class="button is-primary">Back</router-link> -->
        </p>    
        <p class="control">
          <button @click="handleClick()" class="button is-success">Done</button>
        </p>
      </div>
      <br/>
  </div>
</template>
 
<script>
export default {
  methods: {
    handleClick: function() {
      alert("Add data success!");
    }
  }
}
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