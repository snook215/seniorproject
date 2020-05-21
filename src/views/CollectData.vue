<template>
  <div class="collectdata">
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Collect data</p>
          <!-- <p class="subtitle">Sub</p> -->
        </div>
      </div>
    </section>
    <br/>
    <!-- select way to input -->
        <p class="has-text-centered"> choose the way to input the student's information</p>
        <br>
        <div class="tabs is-toggle is-toggle-rounded is-centered">
          <ul>
            <li class>
              <router-link to="/csvupload" class="button">.CSV File</router-link>      
            </li>
            <li class>
              <router-link to="/collectdata2" class="button">Input by yourself</router-link>
            </li>
          </ul>
        </div>

  </div>
</template>


<style lang="scss" scoped>
.org-description {
  margin-top: 50px;
}
.hero-body {
  background-color: rgb(204, 99, 204);
}
</style>