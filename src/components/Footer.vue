<template>
    <el-footer>
      <div class="footer-container">
        <p>&copy; 2025 - Web buôn bán giày dép</p>
      </div>
    </el-footer>
  </template>
  
  <script>
  import { ElFooter } from 'element-plus'
  
  export default {
    name: 'Footer',
    components: {
      ElFooter
    }
  }
  </script>
  
  <style scoped>
  .footer-container {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
  }
  
  .el-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  </style>
  