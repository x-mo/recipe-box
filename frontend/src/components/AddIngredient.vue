<template>
<div class="addingredient">
    <h1>Adding Ingredient Component</h1>
    <form @submit.prevent="addIngredient">
      <input type="text" v-model="name" name="name" placeholder="Ingredient" v-validate="'required'">
      <p class="alert" v-if="errors.has('name')">{{errors.first('name')}}</p>
      <input type="number" step="any" v-model="weight" name="weight" placeholder="Weight" v-validate="'required'">
      <p class="alert" v-if="errors.has('weight')">{{errors.first('weight')}}</p>
      <input type="number" step="any" v-model="price" name="price" placeholder="Price" v-validate="'required'">
      <p class="alert" v-if="errors.has('price')">{{errors.first('price')}}</p>
      <input type="submit" value="Submit" class="btn">
    </form>

    <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in ingredientsArray" :key="index">
            {{ data.name }} {{ data.weight }} {{ data.price }}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>

</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "AddIngredient",
  data() {
    return {
    ingredientsArray: []
    }
  },
  methods: {
    addIngredient() {
      const newIngredient = {
        name: this.name,
        weight: this.weight,
        price: this.price
      }
      console.log(newIngredient);

    axios.post('http://localhost:8080/ingrediants/add/',newIngredient)
      .then(res => {this.ingredientsArray.push(newIngredient); console.log(this.ingredientsArray);})
      .catch(err => { alert("Fill Required Fields"); console.log(err);} );

    }
  },
  created(){
    
    axios.get('http://localhost:8080/ingrediants/api/')
      .then(res => {console.log(res.data);
      this.ingredientsArray = res.data;
      })
      .catch(err => console.log(err));
  }
}
</script>

<style scoped>

</style>
