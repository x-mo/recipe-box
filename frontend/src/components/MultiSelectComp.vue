<template>
  <div>
    <multiselect
      v-model="value"
      multiple=true
      :options="options"
      :hide-selected="true"
      :taggable="true"
      :close-on-select="false"
      :trackable="true"
      :key="ingName"
      track-by="ingName"
      :custom-label="ingrFormat"
    ></multiselect>
    {{value}}
    <br />
    <button type="button" @click="logit">Log it up</button>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import axios from "axios";
export default {
  components: { Multiselect },
  data() {
    return {
      
      value: [],
      options: []
    };
  },
  created() {
    axios
      .get("http://localhost:8080/ingredients/api/")
      .then(res => {
        console.log(res.data);
        this.options = res.data;
      })
      .catch(err => console.log(err));
  },
  methods: {
    logit: function() {
      // console.log(this.value);
    },
    ingrFormat: function({ingName, ingWeight, ingPrice}) {
      return `${ingName} — ${ingWeight} — ${ingPrice}`;
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>