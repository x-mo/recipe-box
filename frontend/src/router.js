import Vue from 'vue'
import Router from 'vue-router'

import Content1 from './components/Content1.vue';
import Content2 from './components/Content2.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/content1',
      name:'content1',
      component: Content1
    },
    {
      path: '/content2',
      name:'content2',
      component: Content2
    }
  ],
  mode:"history"
})