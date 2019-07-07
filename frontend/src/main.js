import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

require("./assets/main.scss")

library.add(
  faTwitter,
  faFacebook,
  faYoutube
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
