<template>
  <div class="container">
    <el-row>
      <el-col :span="4"></el-col>
      <el-col :span="4">
        
        <div class="box">
          <a><el-icon class><List /></el-icon>Danh mục sản phẩm</a>
          </div>
      </el-col>
      <el-col :span="8">
        <div class="box">Cột 2</div>
      </el-col>
      <el-col :span="8">
        <div class="box"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ColumnExample'
}
</script>

<style scoped>
</style>
