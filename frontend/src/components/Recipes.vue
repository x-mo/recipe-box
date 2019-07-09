<template>
  <div class="recipes">

    <div class="columns is-multiline is-centered">

      <div class="card column is-one-fifth" v-for="(data, index) in recipesArray" :key="index">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ data.recipeName }}</p>
              <p class="subtitle is-6">{{ data.recipePrice }}L.E</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- COLUMNS END -->

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "recipes",
  data() {
    return {
      recipesArray: []
    };
  },
  created() {
    axios
      .get("http://localhost:8080/recipes/api/")
      .then(res => {
        console.log(res.data);
        this.recipesArray = res.data;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.columns {
  margin: 5px;
}
.column{
    margin: 20px;
}
</style>
