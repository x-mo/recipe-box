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
      .then(res => {Console.log(res.data);})
      .catch(() => { Console.error("Fetching error occured.");} );
  }
}
</script>

<style scoped>

</style>
