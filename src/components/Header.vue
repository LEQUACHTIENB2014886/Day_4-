<!-- src/components/Header.vue -->
<template>
  <el-container>
    <el-header>
      <div class="header">
        <el-row class="nav-container">
          <el-col :span="8"></el-col> <!-- Phần trống bên trái (8 cột) -->
          <el-col :span="8" class="nav-item-container">
            <div class="nav-item">
              <router-link to="/">Trang chủ</router-link>
            </div>
            <div class="nav-item">
              <router-link to="/products">Sản phẩm</router-link>
            </div>
            <div class="nav-item">
              <router-link to="/login">Đăng nhập</router-link>
            </div>
            <div class="nav-item">
              <router-link to="/contact">Liên hệ</router-link>
            </div>
          </el-col> 
          <el-col :span="8"></el-col> <!-- Phần trống bên phải (8 cột) -->
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

.nav-container {
  display: flex;
  justify-content: center;
}

.nav-item-container {
  display: flex;
  justify-content: space-evenly; /* Căn đều các phần tử */
  align-items: center; /* Căn giữa theo chiều dọc */
  width: 100%;
}

.nav-item {
  text-align: center;
  margin: 0 15px; /* Thêm khoảng cách giữa các mục */
}

.nav-item a {
  display: inline-block;
  padding: 5px 10px;
  color: white;
  text-decoration: none;
}

.nav-item a:hover {
  background-color: #555;
  color: #00ff99;
}

.nav-item a.router-link-active {
  background-color: #333;
}
</style>
