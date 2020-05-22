<template>
    <div class="collectdata">
        <section class="hero">
        <div class="hero-body">
            <div class="container has-text-centered has-text-white">
            <p class="title ">Hello Admin GoGoo</p>
            </div>
        </div>
        </section>
        <br/>
        
        <div class="field is-grouped is-grouped-centered">
            <p class="control">
                
                <!--<a class="button is-primary">Next step</a> -->
                <router-link to="/adduser" class="button is-light">Add User</router-link>
            </p>
            <p class="control">
                <router-link to="/addschool" class="button is-light">Add more school</router-link>
            </p>
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
div.a {
  margin-top: 20px;
  
  margin-left: 700px;
}
</style>