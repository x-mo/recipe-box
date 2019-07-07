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
    axios.get('../ingrediants/')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
}
</script>

<style scoped>

</style>
