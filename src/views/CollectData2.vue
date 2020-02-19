<template>
  <div class="collectdata2">
    <section class="hero is-primary">
      <div class="hero-body is-primary">
        <div class="container has-text-centered">
          <p class="title">Enter your student information</p>
          <p class="subtitle">Subtitle</p>
        </div>
      </div>
    </section>

    <!-- Start input field first row -->
    <br />
    <div id="file-js-example " class="file is-info has-name is-centered">
      <label class="file-label">
        <input class="file-input" type="file" name="resume" />
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">Choose a file…</span>
        </span>
        <span class="file-name">No file uploaded</span>
      </label>
    <p class="help">Import your .csv file</p>
    </div>
    <br />
    <div class="field is-centered">
      <label class="label">Student ID</label>
      <div class="control is-centered">
        <input class="input" type="text" placeholder="Student ID" />
      </div>
    </div>
    <label class="label">Name</label>
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Firstname" />
      </p>
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Lastname" />
      </p>
    </div>

    <div class="field">
      <div class="control">
        <label class="label">Gender</label>
        <label class="radio">
          <input type="radio" name="question" />
          Male
        </label>
        <label class="radio">
          <input type="radio" name="question" />
          Female
        </label>
      </div>
    </div>

    <div class="field is-centered">
      <label class="label">Age</label>
      <div class="control is-centered">
        <input class="input" type="text" placeholder="Age" />
      </div>
    </div>

    <div class="control is-expanded">
      <label class="label">Grade</label>
      <div class="select">
        <select name="grade">
          <option value="0">Select student grade</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
    <br />
    <div class="field is-centered">
      <label class="label">Class</label>
      <div class="control is-centered">
        <input class="input" type="text" placeholder="Class" />
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
    <br />
    <div class="field is-grouped is-grouped-centered">
      <p class="control">
        <router-link to="/collectdata" class="button">Back</router-link>
      </p>
      <p class="control">
        <button class="button is-info ">Add more student</button>
        <!-- <router-link to="/collectdata" class="button is-primary">Back</router-link> -->
      </p>    
      <p class="control">
        <router-link to="/" class="button is-primary">Done</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.org-description {
  margin-top: 50px;
}
</style>