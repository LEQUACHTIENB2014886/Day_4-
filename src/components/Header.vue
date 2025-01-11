<template>
  <el-container>
    <el-header class="header">
      <div class="header-content">
        <div class="nav-item">
          <el-icon>
            <HomeFilled />
          </el-icon>
          <router-link to="/"><span>Trang chủ</span></router-link>
        </div>
        <div class="nav-item">
          <el-icon>
            <ShoppingCart />
          </el-icon>
          <router-link to="/cart"><span>Giỏ hàng</span></router-link>

        </div>
        <div class="nav-item">
          <el-icon>
            <User />
          </el-icon>
          <router-link to="/login"><span>Đăng nhập</span></router-link>

        </div>
        <div class="nav-item">
          <el-icon>
            <PhoneFilled />
          </el-icon>
          <router-link to="/contact"><span>Liên hệ</span></router-link>

        </div>
        <div class="search-item">
          <el-input v-model="searchQuery" placeholder="Nhập từ khóa tìm kiếm" class="input-search">
            <template #prefix>
              <el-icon style="color: black;">
                <Search />
              </el-icon>
            </template>
          </el-input>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import { ElContainer, ElHeader, ElInput, ElIcon } from 'element-plus';
import { HomeFilled, ShoppingCart, User, PhoneFilled } from '@element-plus/icons-vue';
import { Search } from '@element-plus/icons-vue';

const searchQuery = ref('');
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  background: #333;
  color: white;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
}

.nav-item span {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  margin-left: 8px;
  /* Cách chữ và icon ra một chút */
}

.nav-item:hover {
  opacity: 0.8;
}

.nav-item span:hover {
  color: #888;
  /* Màu xám tối khi hover */
  transition: color 0.3s ease-in-out;
}

.search-item {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

.input-search .el-input__inner {
  background-color: #555;
  color: white;
  transition: all 0.3s ease;
}

.input-search .el-input__inner:hover {
  border-color: white;
  transform: scale(1.05);
}

.input-search .el-input__inner::placeholder {
  color: white;
}

.input-search .el-input__inner:hover::placeholder {
  color: #aaa;
}</style>
