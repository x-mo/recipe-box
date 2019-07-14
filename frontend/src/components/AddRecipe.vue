<template>
  <div class="addrecipe">
    <h1>Adding Recipe Component</h1>
    <form @submit.prevent="addRecipe">
      <h1>Recipe</h1>
      <input
        type="text"
        v-model="recipeName"
        name="rname"
        placeholder="Recipe Name"
        v-validate="'required'"
      />

      <input
        type="number"
        step="any"
        v-model="recipePrice"
        name="rprice"
        placeholder="Recipe Price"
        v-validate="'required'"
      />

      <div class="recipe-validation notification is-warning">
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
    
    
      <div class="dynamic-view has-background-primary">
        <h1>Ingredients</h1>
        <MSelect />
       
      </div>
      <input type="submit" value="Submit" class="btn" />

      <div class="notification is-warning">
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

    <ul>
      <transition-group
        name="list"
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutDown"
      >
        <li v-for="(data, index) in recipesArray" :key="index">
          {{ data.recipeName }} {{ data.recipePrice }}
          <i
            class="fa fa-minus-circle"
            v-on:click="remove(index)"
          ></i>
      
      
        </li>
      
      </transition-group>
    </ul>
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
