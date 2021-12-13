<template>
  <ul v-cloak v-if="products.length > 0" class="product-list">
    <li
      v-for="product in products"
      :key="product.id"
      class="product-list__item"
    >
      <img alt="" :src="product.image" />
      <div class="product-list__item-content">
        <div class="product-list__item-title">{{ product.title }}</div>
        <div>{{ product.price }}</div>
      </div>
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

<style>
.product-list {
  list-style-type: none;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 3rem;
}

.product-list__item {
  border-radius: 4px;
  box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.4);
}

.product-list__item-content {
  padding: 2rem;
}

.product-list__item-title {
  font-size: 2rem;
}
</style>
