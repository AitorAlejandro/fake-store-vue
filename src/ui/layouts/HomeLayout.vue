<template>
  <header>
    <h1>Fake Store</h1>
    <slot name="header"></slot>
  </header>
  <main>
    <div class="container">
      <slot name="content"></slot>
    </div>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<script>
export default {
  name: "HomeLayout",
};
</script>

<style></style>
