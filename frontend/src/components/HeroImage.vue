<template>
  <div class="hero">
    <div class="hero is-fullheight is-success has-background">
      <img alt="Fill Murray" class="hero-background is-transparent" src="../assets/heroimage.jpg" />
      <div class="hero-body">
        <div class="container">
          <!-- <img src="../assets/box.png"/>  -->
          <h1 class="title is-size-1 some-shadow">RecipeBox</h1>
          <h3 class="subtitle is-size-2 some-shadow">Cook the meals you love, with no hassles.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
.hero.has-background {
  position: relative;
  overflow: hidden;
}
.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}
.hero-background.is-transparent {
  opacity: 0.7;
}
.some-shadow{
  text-shadow: 0 0 5px rgba(0,0,0,0.8);
}
</style>
