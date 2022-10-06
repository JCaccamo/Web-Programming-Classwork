<script setup lang="ts">
import { reactive } from 'vue';

  const items = [
    { name: 'Shoes', cost: 30},
    { name: 'Shirt', cost: 30},
    { name: 'Pants', cost: 30},
  ]

  const cart = reactive([
    { name: 'Shoes', cost: 30, quantity: 1 },
    { name: 'Shirt', cost: 30, quantity: 1 },
    { name: 'Pants', cost: 30, quantity: 1 },
  ])

  function addToCart(item: any) {
    cart.push({ ...item, quantity: 1 })
  }
</script>

<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>
    <ul>
      <li v-for="item in items" :key="item.name" @click="addToCart(item)">
        <h3>{{ item.name }}</h3>
        <em>{{ item.cost }}</em>
      </li>
    </ul>
    <h3 class="title is-3">Cart</h3>
    <table class="table is-bordered">
      <tr>
        <th>Items</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Cost</th>
      </tr>
      <tr v-for="item in cart" :key="item.name">
        <td>{{ item.name }}</td>
        <td>${{ item.cost }}</td>
        <td><input v-model="item.quantity"></td>
        <td>${{ item.cost * item.quantity }}</td>
      </tr>
      <tr>
        <td colspan="3">Total</td>
        <td>${{ cart.reduce((total, item) => total + item.cost * item.quantity, 0) }}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
  ul {
    display: flex;
    li {
      width: 200px;
      padding: 5px;
      margin: 5px;
    }
  }
</style>
