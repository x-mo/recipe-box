<template>
  <div class="container">
    Still
  </div>
</template>

<script>

import axios from 'axios';


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
//   data() {
//     // return {
//     //   todos: []
//     // }
//   },
  created() {
    axios.get('http://localhost:8080/ingrediants/')
      .then(res => {console.log(res.data);})
      .catch(() => { console.log("Fetching error occured.");} );
  }
}
</script>

<style scoped>

</style>
