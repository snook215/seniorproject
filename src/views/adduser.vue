<template>
    <div class="editstudent">
    <NavAdmin />
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                <p class="title has-text-white">User information</p>
                </div>
            </div>
        </section>


        <br/>

        <!-- form input student information -->
        <div class="b">
            <div class="field is-centered">

                <label class="label">Username</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="username" />
                </div>

              
                <div class="field">
                  <label for="" class="label">Password</label>
                  <div class="control">
                    <input type="password" placeholder="*******" class="input" required>
                  </div>
                </div>

                <label class="label">StaffID</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="01xxxx" />
                </div>             
                
                <label class="label">Name</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="e.g. onnicha seemawong" />
                </div>
            
                <label class="label">Schoolname</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="School" />
                </div>

                <label class="label">Position</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="Position" />
                </div>

                <label class="label">E-mail</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="Email" />
                </div>

                <label class="label">Phone</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="Phone" />
                </div>

                <div class="control is-expanded">
                    <label class="label">Role</label>
                        <div class="select">
                            <select name="role">
                                <option value="0">Choose role</option>
                                <option value="1">User</option>
                                <option value="2">Teacher</option>
                            </select>
                        </div>
            </div>
        </div>
            <br/>
            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                <router-link to="/Homeadmin" class="button">Back</router-link>
                </p>  
                <p class="control">
                <button @click="handleClick()" class="button is-success">Save</button>
                </p>
            </div>
            <br>
        </div>
    </div>
</template>
 
 <script>

 import NavAdmin from "../components/partials/NavAdmin.vue";

export default {
    components: {
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