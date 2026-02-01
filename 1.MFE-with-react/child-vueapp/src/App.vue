<template>
  <div class="vue-inventory">
    <h2>Pharmacy Inventory (Vue Micro-Frontend)</h2>
    <InventoryList />
  </div>
</template>

<script>
import InventoryList from "./components/InventoryList.vue";

export default {
  components: {
    InventoryList,
  },
};
</script>

<style>
.vue-inventory {
  font-family: "Arial", sans-serif;
  padding: 20px;
  border: 4px solid #41b883;
  border-radius: 8px;
  background-color: #f0fdf4;
}
h2 {
  color: #35495e;
}
</style>
