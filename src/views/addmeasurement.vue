<template>
  <div class="collectdata2">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Measurement record</p>
        </div>
      </div>
    </section>

<br/>
    
    <!-- form input student information -->
    <div class="b">
      <div class="field is-centered">
        <label class="label">Student ID</label>
        <div class="control is-centered">
          <input class="input" type="text" placeholder="Student ID" />
        </div>
      </div>
    
      <label class="label">Weight and Hight</label>
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Weight" />
        </p>
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Hight" />
        </p>
      </div>
    </div>

    <br/>
      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <router-link to="/collectdata" class="button">Back</router-link>
        </p>
        <p class="control">
          <router-link to="/" class="button is-success">Done</router-link>
        </p>
      </div>
      <br/>
  </div>
</template>
 

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