<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
//   data() {
//     // return {
//     //   todos: []
//     // }
//   },
  created() {
    axios.get('http://localhost:8080/ingrediants/')
      .then(res => {console.log(res.data);})
      .catch(() => { console.error("Fetching error occured.");} );
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
