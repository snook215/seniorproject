<template>
  <div class="addschool">
    <section class="hero is-primary">
      <div class="hero-body is-primary">
        <div class="container has-text-centered">
          <p class="title">Add more school</p>
          <p class="subtitle">Subtitle</p>
        </div>
      </div>
    </section>
    <!-- Start input field first row -->
    <br />
    <div class="field">
      <label class="label">School name</label>
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Name" />
      </p>
    </div>
    <div class="field">
      <label class="label">Address</label>
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Address" />
      </p>
    </div>

    <div class="field">
      <label class="label">Sub District</label>
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Sub District" />
      </p>
    </div>

    <div class="field">
      <label class="label">District</label>
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="District" />
      </p>
    </div>
    
    <div class="field">
      <label class="label">Province</label>
      <p class="control is-expanded">
        <input class="input is-success" type="text" placeholder="Provice" />
      </p>
    </div>

    <div class="field">
      <label class="label">Tel.</label>
      <p class="control is-expanded">
        <input class="input" type="tel" placeholder="Your phone number" />
      </p>
      <p class="help">Do not enter the first zero</p>
    </div>

    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <!-- <a class="button is-primary">Next step</a> -->
        <router-link to="/collectdata" class="button is-primary">Back</router-link>
      </p>
      <p class="control">
        <router-link to="/addschool" class="button is-light">Done</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.org-description {
  margin-top: 50px;
}
</style>