<template>
  <HomeLayout>
    <template v-slot:header>
      <h2>{{ title }}</h2>
    </template>

    <template v-slot:content>
      <ProductList />
    </template>

    <template v-slot:footer>
      <footer>
        <h2>Store Footer</h2>
      </footer>
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
