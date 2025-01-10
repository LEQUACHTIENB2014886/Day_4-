<template>
  <el-container>
    <el-header>
      <div class="header">Header</div>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="1"><div class="content-box">Sidebar</div></el-col>
        <el-col :span="11"><div class="content-box">Main Content</div></el-col>
      </el-row>
    </el-main>
    <el-footer>
      <div class="footer">Footer</div>
    </el-footer>
  </el-container>
</template>

<script>
import { ElContainer, ElHeader, ElMain, ElFooter, ElRow, ElCol } from 'element-plus'

export default {
  name: 'LayoutExample',
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    ElRow,
    ElCol
  }
}
</script>

<style scoped>
.header, .footer {
  background-color: #333;
  color: white;
  padding: 10px;
}

.content-box {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
}
</style>
