<template>
  <header>
    <div class="header-nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/products">Products</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header-nav {
  display: flex;
  justify-content: space-around;
}
</style>
