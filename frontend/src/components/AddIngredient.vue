<template>
  <div class="container addingredient">
    <h1 class="title">Ingredients</h1>
    <form class="form is-horizontal" @submit.prevent="addIngredient">
      <span class="is-size-5">Add new ingredient:</span>
      <span style="color:red;margin-right:1.25em; display:inline-block;">&nbsp;</span>
      <br />
      <div class="field-body left-pad">
        <input
          class="field input"
          type="text"
          v-model="ingName"
          name="name"
          placeholder="Ingredient"
          v-validate="'required'"
        />

        <input
          class="field input"
          type="number"
          step="any"
          v-model="ingWeight"
          name="weight"
          placeholder="Weight"
          v-validate="'required'"
        />

        <input
          class="field input"
          type="number"
          step="any"
          v-model="ingPrice"
          name="price"
          placeholder="Price"
          v-validate="'required'"
        />

        <input type="submit" value="Add" class="field input button is-hidden" />
      </div>
      <div class="is-hidden notification is-warning">
        <button type="button" class="delete"></button>
        <p class="alert" v-if="errors.has('name')">{{errors.first('name')}}</p>
        <p class="alert" v-if="errors.has('weight')">{{errors.first('weight')}}</p>
        <p class="alert" v-if="errors.has('price')">{{errors.first('price')}}</p>
      </div>
    </form>

    <!-- <ul>
      <transition-group
        name="list"
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutDown"
    >-->
    <table class="table is-bordered is-stripedis-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th class="has-text-centered">Name</th>
          <th class="has-text-centered">Weight</th>
          <th class="has-text-centered">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in ingredientsArray" :key="index">
          <td class="has-text-centered">{{ data.ingName }}</td>
          <td class="has-text-centered">{{ data.ingWeight }}</td>
          <td class="has-text-centered">{{ data.ingPrice }}</td>
        </tr>
      </tbody>
    </table>
    <!-- </transition-group>
    </ul>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddIngredient",
  data() {
    return {
      ingredientsArray: []
    };
  },
  methods: {
    addIngredient() {
      const newIngredient = {
        ingName: this.ingName,
        ingWeight: this.ingWeight,
        ingPrice: this.ingPrice
      };
      console.log(newIngredient);

      axios
        .post("http://localhost:8080/ingredients/add/", newIngredient)
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
.left-pad{
  padding-left:14px
}

</style>
