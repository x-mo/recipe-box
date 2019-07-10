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
        <button class="delete"></button>
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
      <!-- <input
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
        name="price"
        placeholder="Price"
        v-validate="'required'"
      />-->
      <div class="dynamic-view has-background-primary">
        <h1>Ingredients</h1>
        <MSelect/>
        <!-- <div v-for="(find,index) in finds" :key="index">
          <input
            v-model="find.ingName"
            type="text"
            name="iname"
            placeholder="Ingredient"
            v-validate="'required'"
          />
          <input
            v-model="find.ingWeight"
            type="number"
            step="any"
            name="iweight"
            placeholder="Weight"
            v-validate="'required'"
          />
          <input
            v-model="find.ingPrice"
            type="number"
            step="any"
            name="iprice"
            placeholder="Price"
            v-validate="'required'"
          />
          
          
        </div> -->
        <!-- <button type="button" @click="addFind">+</button> -->

        <!-- <div class="notification is-warning">
        <button class="delete"></button>
        <p class="alert" v-if="errors.has('iname')">
          The
          <strong>Ingredient Name</strong> field is Required.
        </p>
        <p class="alert" v-if="errors.has('iprice')">
          The
          <strong>Ingredient Price</strong> field is Required, and must be a number.
        </p>
        <p class="alert" v-if="errors.has('iweight')">
          The
          <strong>Ingredient Weight</strong> field is Required, and must be a number.
        </p>
      </div> -->



      </div>
      <input type="submit" value="Submit" class="btn" />

      <div class="notification is-warning">
        <button class="delete"></button>
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
          <!-- <li v-for="(data,iindex) in data.recipeIngr" :key="iindex"> {{ data.ingName }}</li> -->
        </li>
        <!-- <li v-for="(data,index) in ingredientsArray" :key="index"> {{ data.ingName }}</li> -->
      </transition-group>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

import MSelect from '../components/MultiSelectComp.vue'

export default {
  name: "AddRecipe",
  components: {
    
    MSelect
  },
  data() {
    return {
      // finds: [],
      // ingredientsArray: [{}],
      recipesArray: []
    };
  },
  methods: {
    // addFind: function() {
    //   this.finds.push({
    //     /*value: ""*/
    //   });
    // },
    addRecipe() {
      const newRecipe = {
        recipeName: this.recipeName,
        recipeImage: "https://bulma.io/images/placeholders/1280x960.png",
        recipeIngr: MSelect.options,
        recipePrice: this.recipePrice

      };
      axios
        .post("http://localhost:8080/recipes/add/", newRecipe)
        .then(() => {
          this.recipesArray.push(newRecipe);
          console.log(this.recipesArray);
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
        //console.log(res.data);
        this.recipesArray = res.data;
        //this.ingredientsArray = this.recipesArray.recipeIngr;
        // console.log(this.ingredientsArray);

        console.log(res.data.recipeIngr);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
</style>
