<template>
  <HomeLayout>
    <template v-slot:header>
      <h1>{{ title }}</h1>
    </template>

    <template v-slot:content>
      <ProductList />
    </template>

    <template v-slot:footer>
      <p>Here's some footer info</p>
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from "../layouts/HomeLayout.vue";
import ProductList from "../components/ProductList.vue";

export default {
  name: "Home",
  components: {
    HomeLayout,
    ProductList,
  },
  data() {
    return { title: "Fake Store Home" };
  },
};
</script>

<style></style>
