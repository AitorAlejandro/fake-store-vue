<template>
  <ul v-cloak v-if="products.length > 0">
    <li v-for="product in products" :key="product.id">
      <div>{{ product.title }}</div>
      <div>{{ product.price }}</div>
      <div>{{ product.description }}</div>
      <div>{{ product.category }}</div>
      <img alt="" :src="product.image" />
    </li>
  </ul>
  <div v-else>Loading ...</div>
</template>

<script>
import { ProductRepositoryHttp } from "../../core/Products/infraestructure";
import { Product } from "../../core/Products/application";

const productRepositoryHttp = new ProductRepositoryHttp();
const productService = new Product(productRepositoryHttp);

export default {
  name: "ProductList",
  data() {
    return {
      products: [],
    };
  },
  created() {
    productService
      .fetchAll()
      .then((products) => {
        this.products = products;
      })
      .catch(() => (this.products = []));
  },
};
</script>

<style></style>
