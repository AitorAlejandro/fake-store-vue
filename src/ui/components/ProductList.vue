<template>
  <div>
    <h1>Fake Store Home</h1>
    <ul v-cloak v-if="products.length > 0">
        <li v-for="product in products" :key="product.id">
            <div>{{product.title}}</div>
            <div>{{product.price}}</div>
            <div>{{product.description}}</div>
            <div>{{product.category}}</div>
            <img alt="" :src="product.image" />
        </li>
    </ul>
    <div v-else>
        Loading ...
    </div>
  </div>
</template>

<script>
import {Products} from "../../core"

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
    };
  },
  created() {
    Products.getProducts().then((products) => {
      this.products = products;
    });
  },
}
</script>

<style>
</style>
