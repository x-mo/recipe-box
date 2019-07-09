import Vue from 'vue'
import Router from 'vue-router'

import AddRecipe from './components/AddRecipe.vue';
import AddIngredient from './components/AddIngredient.vue';
import Recipes from './components/Recipes.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/addingredient',
      name:'addingredient',
      component: AddIngredient
    },
    {
      path: '/addrecipe',
      name:'addrecipe',
      component: AddRecipe
    },
    {
      path: '/recipes',
      name:'recipes',
      component: Recipes
    }
  ],
  mode:"history"
})