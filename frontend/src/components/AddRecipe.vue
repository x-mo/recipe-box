<template>
  <div class="addrecipe">
    <h1>Adding Recipe Component</h1>
    <form @submit.prevent="addRecipe">
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

<div class="notification is-warning">
        <button class="delete"></button>
        <p class="alert" v-if="errors.has('rname')">The <strong>Recipe Name</strong> field is Required.</p>
        <p class="alert" v-if="errors.has('rprice')">The <strong>Recipe Price</strong> field is Required, and must be a number.</p>
      </div>

      <br>
      <input
        type="text"
        v-model="ingName"
        name="iname"
        placeholder="Ingredient"
        v-validate="'required'"
      />

      <input
        type="number"
        step="any"
        v-model="ingWeight"
        name="weight"
        placeholder="Weight"
        v-validate="'required'"
      />

      <input
        type="number"
        step="any"
        v-model="ingPrice"
        name="iprice"
        placeholder="Price"
        v-validate="'required'"
      />

      <input type="submit" value="Submit" class="btn" />

      <div class="notification is-warning">
        <button class="delete"></button>
        <p class="alert" v-if="errors.has('iname')">The <strong>Ingredient Name</strong> field is Required.</p>
        <p class="alert" v-if="errors.has('weight')">The <strong>Recipe Weight</strong> field is Required, and must be a number.</p>
        <p class="alert" v-if="errors.has('iprice')">The <strong>Recipe Price</strong> field is Required, and must be a number.</p>
      </div>
    </form>

    <ul>
      <transition-group
        name="list"
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutDown"
      >
        <li v-for="(data, index) in ingredientsArray" :key="index">
          {{ data.ingName }} {{ data.ingWeight }} {{ data.ingPrice }}
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

export default {
  name: "AddRecipe",
  data() {
    return {
      ingredientsArray: []
    };
  },
  methods: {
    addRecipe() {
      const newIngredient = {
        ingName: this.ingName,
        ingWeight: this.ingWeight,
        ingPrice: this.ingPrice
      };
      console.log(newIngredient);

      axios
        .post("http://localhost:8080/recipes/add/", newIngredient)
        .then(() => {
          this.ingredientsArray.push(newIngredient);
          console.log(this.ingredientsArray);
        })
        .catch(err => {
          alert("Fill Required Fields");
          console.log(err);
        });
    }
  },
  created() {
    axios
      .get("http://localhost:8080/ingredients/api/")
      .then(res => {
        console.log(res.data);
        this.ingredientsArray = res.data;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>

</style>
