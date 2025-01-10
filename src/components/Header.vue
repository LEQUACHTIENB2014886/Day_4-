<!-- src/components/Header.vue -->
<template>
  <el-container>
    <el-header>
      <div class="header">
        <el-row>
          <el-col :span="8"></el-col>
          <!-- Các liên kết đến các trang -->
          <el-col :span="2" class="nav-item">
            <router-link to="/">Trang chủ</router-link>
          </el-col>
          <el-col :span="2" class="nav-item">
            <router-link to="/products">Sản phẩm</router-link>
          </el-col>
          <el-col :span="2" class="nav-item">
            <router-link to="/login">Đăng nhập</router-link>
          </el-col>
          <el-col :span="2" class="nav-item">
            <router-link to="/contact">Liên hệ</router-link>
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
      </div>
    </el-header>
  </el-container>
</template>

<script setup>
import { ElContainer, ElHeader, ElRow, ElCol } from 'element-plus';
</script>

<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 15px;
}

.nav-item {
  text-align: center;
}

/* CSS cho router-link */
.nav-item a {
  display: inline-block;
  padding: 5px 10px;
}

/* Hiệu ứng hover */
.nav-item a:hover {
  background-color: #555;
  color: #00ff99;
}

/* Sửa CSS cho router-link để đảm bảo style được áp dụng */
.nav-item a.router-link-active {
  background-color: #333; /* Hoặc màu khác bạn muốn khi trang đang được chọn */
}
</style>
