<template>
  <h1>{{ title }}</h1>
  <ProductList />
</template>

<script>
import ProductList from "../components/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductList,
  },
  data() {
    return { title: "Fake Store Home" };
  },
};
</script>

<style></style>
