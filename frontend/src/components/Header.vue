<template>
  <div class="header ">
      <nav class="navbar is-success is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="http://localhost:8080/">
            <img src="../assets/box.png"/>
            <span class="is-size-4"><strong>&nbsp;RecipeBox</strong></span>
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">

            <a class="navbar-item" href="http://localhost:8080/recipes">Recipes</a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <a class="navbar-item" href="http://localhost:8080/addrecipe">Add Recipes</a>
                <a class="navbar-item" href="http://localhost:8080/addingredient">Add Ingredients</a>
                <!-- <a class="navbar-item">Contact</a> -->
                <!-- <hr class="navbar-divider" /> -->
                <!-- <a class="navbar-item">Report an issue</a> -->
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-info" @click="$parent.showModal= true">
                  <strong>Have an account?</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
</template>

<script>



export default {
  name: 'Header',

}
</script>

<style scoped>
/* .header{
  margin-bottom:52px;
} */
</style>
