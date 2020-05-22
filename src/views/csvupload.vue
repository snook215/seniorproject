<template>
    <div class="csvupload">
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

            
          <form action="/action_page.php">

            <input type="file" id="myFile" name="filename"><br><br>
            <div class="field is-grouped is-grouped-centered">
              <p class="control has-text-centered">
                <router-link to="/collectdata" class="button">Back</router-link>
              </p>
              <p class="control has-text-centered">
                <router-link to="/" class="button is-success">Submit</router-link>
              </p>
            </div>
            <!-- <input type="submit"> -->
            </form>
        </div>
    </div>
</template>



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