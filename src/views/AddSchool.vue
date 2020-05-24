<template>
  <div class="addschool">
    <NavAdmin />
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title has-text-white">Add school</p>
        </div>
      </div>
    </section>
    
    <!-- Start input field first row -->
    <div class="a">
       <div class="field is-centered">

                <label class="label">SchoolID</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="01xxx" />
                </div>

                <label class="label">School name</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="School name" />
                </div>

                <label class="label">Address</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="Address" />
                </div>             
                
                <label class="label">Tel</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="08xxxxxxxx" />
                </div>
       </div>

      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <!-- <a class="button is-primary">Next step</a> -->
          <router-link to="/homeadmin" class="button">Back</router-link>
        </p>
        <p class="control">
          <button @click="handleClick()" class="button is-success">Done</button>
        </p>
      </div>
    </div>
  </div>
</template>

 
 <script>
import NavAdmin from "../components/partials/NavAdmin.vue";

export default {
  components:{
    NavAdmin
  },
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
  margin-top: 20px;
  margin-right: 100px;
  margin-left: 100px;
}
.hero-body {
  background-color: rgb(204, 99, 204);
} 
</style>