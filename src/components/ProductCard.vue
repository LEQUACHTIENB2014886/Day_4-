<template>
  <div class="product-card">
    <img :src="product.image" alt="Shoe" class="product-image" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">{{ product.price | currency }}</p>
  </div>
</template>
  
  <script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
  
  <style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 200px;
  text-align: center;
  border-radius: 8px;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
}

.product-price {
  color: #333;
  font-size: 16px;
  margin-top: 8px;
}
</style>
  