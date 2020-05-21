<template>
    <div class="editstudent">
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                <p class="title">Enter your student information</p>
                </div>
            </div>
        </section>


        <br/>

        <!-- form input student information -->
        <div class="b">
            <div class="field is-centered">
                
                <label class="label">StaffID :</label><br/>
                
                
                <label class="label">Name</label>
                <div class="control is-centered">
                <input class="input" type="text" placeholder="Name" />
                </div>
            
                <label class="label">School</label>
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
            </div>
            <br/>
            <div class="field is-grouped is-grouped-centered">
                <p class="control">
                <router-link to="/Profile" class="button">Back</router-link>
                </p>  
                <p class="control">
                <router-link to="/" class="button is-success">Save</router-link>
                </p>
            </div>
            <br>
        </div>
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