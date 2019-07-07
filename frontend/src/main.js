import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import Content1 from './components/Content1.vue';
import Content2 from './components/Content2.vue';

require("./assets/main.scss")

library.add(
  faTwitter,
  faFacebook,
  faYoutube
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  
  {path: '/content1', component: Content1},
  {path: '/content2', component: Content2},
  
];

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
