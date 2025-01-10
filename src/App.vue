<!-- src/App.vue -->
<template>
  <div id="app">
    <Header />
    <router-view /> <!-- Đây là nơi các trang sẽ được hiển thị -->
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'; // Import Header component
import Footer from './components/Footer.vue';
</script>

<style>
/* Thêm CSS nếu cần */
</style>
