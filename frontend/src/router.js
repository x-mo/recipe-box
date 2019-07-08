import Vue from 'vue'
import Router from 'vue-router'

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
      path: '/recipes',
      name:'recipes',
      component: Recipes
    }
  ],
  mode:"history"
})