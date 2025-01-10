<template>
    <div class="home">
      <div class="product-list">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue'
  
  export default {
    components: {
      ProductCard
    },
    data() {
      return {
        products: [
          { id: 1, name: 'Giày thể thao', price: 350000, image: 'shoe1.jpg' },
          { id: 2, name: 'Giày sandal', price: 250000, image: 'shoe2.jpg' },
          { id: 3, name: 'Giày boot', price: 500000, image: 'shoe3.jpg' },
          { id: 4, name: 'Giày lười', price: 200000, image: 'shoe4.jpg' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .home {
    padding: 20px;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
  </style>
  