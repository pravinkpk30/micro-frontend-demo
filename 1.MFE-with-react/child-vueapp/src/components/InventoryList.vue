<template>
  <div class="inventory-container">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Drug Name</th>
          <th>Stock</th>
          <th>Unit Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in inventory" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.stock }}</td>
          <td>${{ item.price.toFixed(2) }}</td>
          <td>
            <span
              :class="[
                'status-badge',
                item.stock > 20 ? 'in-stock' : 'low-stock',
              ]"
            >
              {{ item.stock > 20 ? "In Stock" : "Low Stock" }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inventory: [
        { id: 101, name: "Paracetamol 500mg", stock: 150, price: 5.0 },
        { id: 102, name: "Amoxicillin 250mg", stock: 45, price: 12.5 },
        { id: 103, name: "Ibuprofen 400mg", stock: 12, price: 8.75 },
        { id: 104, name: "Cetirizine 10mg", stock: 80, price: 6.0 },
        { id: 105, name: "Aspirin 81mg", stock: 5, price: 4.2 },
      ],
    };
  },
};
</script>

<style scoped>
.inventory-container {
  margin-top: 20px;
  overflow-x: auto;
}
.inventory-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.inventory-table th,
.inventory-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}
.inventory-table th {
  background-color: #35495e;
  color: white;
}
.inventory-table tr:hover {
  background-color: #f5f5f5;
}
.status-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: bold;
}
.in-stock {
  background-color: #e6fffa;
  color: #047857;
}
.low-stock {
  background-color: #fff5f5;
  color: #c53030;
}
</style>
