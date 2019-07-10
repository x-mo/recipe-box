<template>
  <div>
    <multiselect
      v-model="selected"
      multiple="true"
      :options="options"
      :hide-selected="true"
      :taggable="true"
      :custom-label="ingrFormat"
    ></multiselect>
    {{selected}}
    <br />
    <button type="button" @click="logit">Log the fuck up</button>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import axios from "axios";
export default {
  components: { Multiselect },
  data() {
    return {
      selected: null,
      value: { ingName: "Tomatoes", ingWeight: 1, ingPrice: 10 },
      options: [
        {
          ingName: "Tomatoes",
          ingWeight: 1,
          ingPrice: 10
        },
        {
          ingName: "Cheese",
          ingWeight: 1,
          ingPrice: 20
        },
        {
          ingName: "Cucumber",
          ingWeight: 1,
          ingPrice: 30
        }
      ]
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
      console.log(this.selected);
    },
    ingrFormat: function({ingName, ingWeight, ingPrice}) {
      return `${ingName} — ${ingWeight} — ${ingPrice}`;
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>