<template>
  <div class="container addrecipe">
    <h1 class="title">Recipes</h1>
    <form @submit.prevent="addRecipe">
      <h1 class="is-size-5">Add new recipe:</h1>
      <input
      class="input"
        type="text"
        v-model="recipeName"
        name="rname"
        placeholder="Recipe Name"
        v-validate="'required'"
      />

      <input
      class="input"
        type="number"
        step="any"
        v-model="recipePrice"
        name="rprice"
        placeholder="Recipe Price"
        v-validate="'required'"
      />

      <div class="recipe-validation notification is-warning is-hidden">
        <button type="button" class="delete"></button>
        <p class="alert" v-if="errors.has('rname')">
          The
          <strong>Recipe Name</strong> field is Required.
        </p>
        <p class="alert" v-if="errors.has('rprice')">
          The
          <strong>Recipe Price</strong> field is Required, and must be a number.
        </p>
      </div>

      <br />

      <!-- <div class="dynamic-view has-background-primary"> -->
        <h1 class="is-size-5">Ingredients:</h1>
        <MSelect />
      <!-- </div> -->
      <input type="submit" value="Add" class="button input" />

      <div class="notification is-warning is-hidden">
        <button type="button" class="delete"></button>
        <p class="alert" v-if="errors.has('iname')">
          The
          <strong>Ingredient Name</strong> field is Required.
        </p>
        <p class="alert" v-if="errors.has('weight')">
          The
          <strong>Recipe Weight</strong> field is Required, and must be a number.
        </p>
        <p class="alert" v-if="errors.has('iprice')">
          The
          <strong>Recipe Price</strong> field is Required, and must be a number.
        </p>
      </div>
    </form>
    <table class="table is-bordered is-stripedis-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th class="has-text-centered">Name</th>
          <th class="has-text-centered">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in recipesArray" :key="index">
          <td class="has-text-centered">{{ data.recipeName }}</td>
          <td class="has-text-centered">{{ data.recipePrice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

import MSelect from "../components/MultiSelectComp.vue";

export default {
  name: "AddRecipe",
  components: {
    MSelect
  },
  data() {
    return {
      recipesArray: []
    };
  },
  methods: {
    addRecipe() {
      const newRecipe = {
        recipeName: this.recipeName,
        recipeImage: "https://bulma.io/images/placeholders/1280x960.png",
        recipePrice: this.recipePrice,
        recipeIngr: this.$children[0].value
      };

      axios
        .post("http://localhost:8080/recipes/api/add/", newRecipe)
        .then(() => {
          this.recipesArray.push(newRecipe);
        })
        .catch(err => {
          alert("Fill Required Fields");
          console.log(err);
        });
    }
  },
  created() {
    axios
      .get("http://localhost:8080/recipes/api/")
      .then(res => {
        this.recipesArray = res.data;

        console.log(res.data.recipeIngr);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
</style>
