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
    <div class="field is-horizontal is-centered">
      <div class="field is-centered">
        <label class="label">Name</label>
        <div class="control is-centered">
          <input class="input" type="text" placeholder="Text input" />
        </div>
        <p class="help">Input your school name or zip code</p>
      </div>

      <div class="control">
  <div class="select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
</div>

      <div class="field is-centered">
        <label class="label">Zipcode</label>
        <div class="control">
          <input class="input" type="taxt" placeholder="Zip code" />
        </div>
      </div>
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