<template>
  <div>
    <!-- Carousel Section -->
    <div class="carousel-container">
      <el-carousel :interval="3000" arrow="always" height="600px">
        <el-carousel-item v-for="(item, index) in images" :key="index">
          <div class="carousel-item">
            <img :src="item.src" :alt="item.alt" class="carousel-image" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <hr />

    <!-- Flash Sale Section -->
    <div class="flash-sale">
      <el-row>
        <el-col>
          <div class="sale-title">Các sản phẩm hiện đang SALE</div>
          <div class="countdown-wrapper">
            <div class="countdown">
              <div class="time-box" v-text="hours"></div>
              <div class="time-box" v-text="minutes"></div>
              <div class="time-box" v-text="seconds"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <hr />

    <!-- Product Section -->
    <div class="product">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(product, index) in products" :key="index">
          <div class="grid-content">
            <img :src="product.image" :alt="product.name" class="product-image" />
            <div class="product-details">
              <div class="product-name">{{ product.name }}</div>
              <div class="product-prices">
                <div class="original-price">{{ product.originalPrice }}</div>
                <div class="sale-price">{{ product.salePrice }}</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { ElCarousel, ElCarouselItem } from "element-plus";
import { ref, onMounted } from "vue";

export default {
  components: {
    ElCarousel,
    ElCarouselItem
  },
  setup() {
    // Mảng hình ảnh carousel
    const images = [
      {
        src: "./src/assets/carosel/nike.jpg"
      },
      {
        src: "./src/assets/carosel/adidas.jpg"
      },
      {
        src: "./src/assets/carosel/puma.jpg"
      },
      {
        src: "./src/assets/carosel/gucci.jpg"
      },
      {
        src: "./src/assets/carosel/converse.jpg"
      }
    ];

    // Mảng sản phẩm với tên, hình ảnh và 2 mức giá
    const products = [
      {
        image: "./src/assets/products/1.jpg",
        name: "Giày Nike Air Max",
        originalPrice: "1,500,000 VND",
        salePrice: "1,200,000 VND"
      },
      {
        image: "./src/assets/products/2.jpg",
        name: "Giày Adidas Ultraboost",
        originalPrice: "2,000,000 VND",
        salePrice: "1,700,000 VND"
      },
      {
        image: "./src/assets/products/3.jpg",
        name: "Giày Puma Future Rider",
        originalPrice: "1,800,000 VND",
        salePrice: "1,500,000 VND"
      },
      {
        image: "./src/assets/products/4.jpg",
        name: "Giày Converse Chuck Taylor",
        originalPrice: "1,200,000 VND",
        salePrice: "1,000,000 VND"
      },
      {
        image: "./src/assets/products/5.jpg",
        name: "Giày Gucci Ace",
        originalPrice: "4,500,000 VND",
        salePrice: "3,800,000 VND"
      },
      {
        image: "./src/assets/products/6.jpg",
        name: "Giày New Balance 990v5",
        originalPrice: "3,000,000 VND",
        salePrice: "2,500,000 VND"
      },
      {
        image: "./src/assets/products/7.jpg",
        name: "Giày Nike Air Force 1",
        originalPrice: "1,800,000 VND",
        salePrice: "1,500,000 VND"
      },
      {
        image: "./src/assets/products/8.jpg",
        name: "Giày Adidas NMD",
        originalPrice: "2,200,000 VND",
        salePrice: "1,900,000 VND"
      }
    ];

    const timeLeft = ref("");
    const hours = ref("00");
    const minutes = ref("00");
    const seconds = ref("00");

    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-02-22T00:00:00");
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hrs = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((difference % (1000 * 60)) / 1000);

        hours.value = String(hrs).padStart(2, "0");
        minutes.value = String(mins).padStart(2, "0");
        seconds.value = String(secs).padStart(2, "0");
      } else {
        hours.value = minutes.value = seconds.value = "00";
      }
    };

    onMounted(() => {
      calculateTimeLeft();
      setInterval(calculateTimeLeft, 1000);
    });

    return { images, products, hours, minutes, seconds };
  }
};
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding: 10px;
  color: white;
  text-align: center;
  border: 1px solid #ddd; /* Thêm viền nhỏ */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Viền nhẹ */
  margin-bottom: 10px; /* Khoảng cách giữa các sản phẩm */
}

.carousel-container {
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  height: auto;
}

.carousel-item {
  position: relative;
  text-align: center;
  color: white;
  font-size: 18px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
}

.sale-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
}

.countdown-wrapper {
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.countdown {
  display: flex;
  justify-content: space-between;
}

.time-box {
  font-size: 15px;
  font-weight: bold;
  background-color: red;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0 5px;
  margin-bottom: 5px;
  width: 20px;
  text-align: center;
  transition: transform 0.5s ease-in-out;
}

.time-box:hover {
  transform: scale(1.1);
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.product {
  margin-bottom: 70px;
}

.product-details {
  margin-top: 10px;
  text-align: center;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
  color: black;
}

.product-prices {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 16px;
}

.original-price {
  text-decoration: line-through;
  color: gray;
}

.sale-price {
  font-weight: bold;
  color: red;
}
</style>
