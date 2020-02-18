<template>
  <div class="collectdata">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">INPUT FROMS</h1>
        </div>
      </div>
    </div>
    <div class="container is-fluid">
      <div class="notification">
        This container is
        <strong>centered</strong> on desktop.
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">From</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="Name" />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded has-icons-left has-icons-right">
              <input
                class="input is-success"
                type="email"
                placeholder="Email"
                value="alex@smith.com"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <!-- <br />
      <label class="label">Name</label>
      <div class="field is-multiline is-mobile ">
        <div class="control is-half">
          <input class="input" type="text" placeholder="Text input" />
        </div>
        <div class="control is-half">
          <input class="input" type="text" placeholder="Text input" />
      </div>-->
      <!-- 
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Text input" value="bulma" />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p class="help is-success">This username is available</p>
      </div>-->

      <!-- dropdown country !-->
      <div class="field">
        <p class="control has-icons-left">
          <span class="select">
            <select>
              <option selected>Country</option>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
          <span class="icon is-small is-left">
            <i class="fas fa-globe"></i>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.org-description {
  margin-top: 50px;
}
</style>