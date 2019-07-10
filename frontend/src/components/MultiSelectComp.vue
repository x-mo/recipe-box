<template>
  <div>
    <multiselect v-model="selected" multiple=true :options="options"></multiselect>
    <button @click="logit">Log the fuck up</button>
  </div>
</template>

<script>
import axios from 'axios';
import Multiselect from "vue-multiselect";
export default {
  components: { Multiselect },
  data() {
    return {
      selected: null,
      // options: ["list", "of", "options"]
      options: [{
        "ingName": "Maccaronie",
        "ingWeight": 1,
        "ingPrice": 18
    },{
        "ingName": "Maccaronie",
        "ingWeight": 1,
        "ingPrice": 18
    },{
        "ingName": "Maccaronie",
        "ingWeight": 1,
        "ingPrice": 18
    }]
    };
  },
  methods: {
    logit: function() {
      console.log(this.selected);
    }
  },
  created() {
    axios
      .get("http://localhost:8080/ingredients/api/")
      .then(res => {
        console.log(res.data.ingName);
        // this.options = res.data;
        // this.options = this.options.ingName
      })
      .catch(err => console.log(err));
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>