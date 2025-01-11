<template>
  <div id="app">
    <Header />
    <router-view /> <!-- Đây là nơi các trang sẽ được render -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>
