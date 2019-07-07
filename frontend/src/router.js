import Vue from 'vue'
import Router from 'vue-router'

import AddIngredient from './components/AddIngredient.vue';
import Content2 from './components/Content2.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/addingredient',
      name:'addingredient',
      component: AddIngredient
    },
    {
      path: '/content2',
      name:'content2',
      component: Content2
    }
  ],
  mode:"history"
})