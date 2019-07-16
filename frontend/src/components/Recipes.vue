<template>
  <div class="recipes" @keyup.esc="showRecipeModal = false" tabindex="0">
    <PopupRecipe v-if="showRecipeModal" @close="showRecipeModal = false">
      <!-- <h3 slot="header">custom header</h3> -->
    </PopupRecipe>

    <div class="columns is-multiline is-centered">
      <div
        @click="popup(data,index)"
        class="card column is-one-fifth"
        v-for="(data, index) in recipesArray"
        :key="index"
      >
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
import PopupRecipe from "./PopupRecipe.vue";

export default {
  name: "recipes",
  methods: {
    popup: function(data, index) {
      this.showRecipeModal=true;
      console.log("recipe data");
      console.log(data);
      this.selectedRecipeName = data.recipeName;
      this.selectedRecipePrice = data.recipePrice;
      this.selectedIngredients = data.recipeIngr;
      console.log("selectedRecipeNAME")
      console.log(this.selectedRecipeName)
      console.log("selectedRecipePRICE")
      console.log(this.selectedRecipePrice)
      console.log("selectedIngredients")
      console.log(this.selectedIngredients)
    }
  },
  data() {
    return {
      recipesArray: [],
      showRecipeModal: false,
      selectedRecipeName: "",
      selectedRecipePrice: "",
      selectedIngredients: []
    };
  },
  components: {
    PopupRecipe
  },
  created() {
    axios
      .get("http://localhost:8080/recipes/api/")
      .then(res => {
        console.log(res.data);
        this.recipesArray = res.data;
      })
      .catch(err => console.log(err));

    console.log("showRecipeModal" + this.showRecipeModal);
    console.log(this.showRecipeModal);
  }
};
</script>

<style scoped>
.columns {
  margin: 5px;
}
.column {
  margin: 20px;
}
</style>
