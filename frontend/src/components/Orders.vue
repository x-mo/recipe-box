<template>
  <div class="container orders">
    <h1 class="title">Orders</h1>
    <table class="table is-bordered is-stripedis-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th class="has-text-centered">Order#</th>
          <th class="has-text-centered">Status</th>
          <th class="has-text-centered">User</th>
          <th class="has-text-centered">Recipes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in orders" :key="index">
          <td class="has-text-centered">{{ data.orderNumber }}</td>
          <td class="has-text-centered">{{ data.orderStatus }}</td>
          <td class="has-text-centered">{{ data.username }}</td>
          <td class="has-text-centered">{{ data.orderItems[0].recipeName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Orders",
  data() {
    return {
      orders: []
    };
  },
  methods: {
  },
  created() {
    console.log("Orders created");
    axios
      .get("http://localhost:8080/orders/api/")
      .then(res => {
        
        console.log(res.data);
        this.orders = res.data;
      })
      .catch(err => console.log(err));

      
  }
};
</script>

<style scoped>
</style>
