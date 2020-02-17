<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">INPUT FROMS</h1>        
        </div>
      </div>
    </div>  
    <div class="container"> 
      <br>
      <input class="input" type="text" placeholder="Text input">
      <br> Firstname: <input v-model="message" placeholder="Firstname">
      <p class="org-description is-size-4">paragraph 1 Pen Fan Nook</p>
      <p class="org-description is-size-4">paragraph 2 still pen fan Nook</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .org-description {
    margin-top: 50px;
  }
</style>