<template>
  <div class="whyus columns is-multiline is-centered">
    <div class="level"><h1 class="title has-text-grey-dark title-sentence is-size-1 level-item">Why RecipeBox</h1></div>
    <nav class="level columns">
      <div class="level-item  has-text-centered column">
        <div>
          <img src="../assets/why1.webp" alt="">
          <p class="top-pad is-size-5 has-text-weight-medium">No skimpin’ on the chicken!</p>
        </div>
      </div>
      <div class="level-item has-text-centered column">
        <div>
          <img src="../assets/why2.webp" alt="">
          <p class="top-pad is-size-5 has-text-weight-medium">No commitment whatsoever</p>
        </div>
      </div>
      <div class="level-item has-text-centered column">
        <div>
          <img src="../assets/why3.webp" alt="">
          <p class="top-pad is-size-5 has-text-weight-medium">The most 5-star reviews</p>
        </div>
      </div>
      <div class="level-item has-text-centered column">
        <div>
          <img src="../assets/why4.webp" alt="">
          <p class="top-pad is-size-5 has-text-weight-medium">Fresh and affordable</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "whyus",
  data() {
    return {
      //   recipesArray: []
    };
  },
  created() {}
};
</script>

<style scoped>

.title-sentence {
  margin-top: 16px;
}
.top-pad{
  padding-top:32px;
}
.is-size-5 has-text-weight-medium-sentence {
  margin-top: 16px;
}
.columns {
  margin: 5px;
}
.column {
  margin: 20px;
}
</style>
