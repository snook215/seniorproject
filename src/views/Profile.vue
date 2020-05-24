<template>
    <div class="collectdata2">
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                <p class="title has-text-white">Profile</p>
                </div>
            </div>
        </section>

        <!-- profile -->
        <div class="a">
            <div class="field">
                <label class="label">StaffID :</label><br/>
            </div>
            <div class="field">
                <label class="label">Name :</label><br/>
            </div>
            <div class="field">
                <label class="label">School :</label><br/>
            </div>
            <div class="field">
                <label class="label">Position :</label><br/>
            </div>
            <div class="field">
                <label class="label">E-mail :</label><br/>
            </div>
            <div class="field">
                <label class="label">Phone :</label><br/>
            </div>
        </div>
        
            <!-- edit button --> 
            
                <div class="field is-centered">
                    <p class="control has-text-centered">
                        <router-link to="/editteacher" class="button is-info">Edit</router-link>
                    </p> 
                </div>
                <br/>
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
        text-indent: 35%
    }

</style>