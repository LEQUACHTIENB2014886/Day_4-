<template>
  <div>
    <Header />
    <router-view /> <!-- Hiển thị trang dựa trên router -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Cấu hình chung cho ứng dụng */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
