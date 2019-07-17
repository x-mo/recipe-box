import Vue from 'vue'
import Router from 'vue-router'

import AddRecipe from './components/AddRecipe.vue';
import AddIngredient from './components/AddIngredient.vue';
import Recipes from './components/Recipes.vue';
import Orders from './components/Orders.vue';

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
    },
    {
      path: '/orders',
      name:'orders',
      component: Orders
    }
  ],
  mode:"history"
})