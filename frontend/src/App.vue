<template>
  <div id="app">
    <Header/>
    <Hero v-if="showHero"/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/HeroImage.vue'
import Footer from './components/Footer.vue'

import axios from 'axios';

export default {
  name: 'app',
  computed: {
      showHero() {
        if(this.$route.path == "/" || this.$route.path == "/home" ) {
          return true
        } else {
          return false
        }
      }
    },
  components: {
    Header,
    Hero,
    Footer
  },
  created() {
    axios.get('http://localhost:8080/ingrediants/')
      .then(res => {console.log(res.data);})
      .catch(() => { console.error("Fetching error occured.");} );
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* .brand-name{
      font-family: 'Brush Script MT', sans-serif;
  } */
</style>
