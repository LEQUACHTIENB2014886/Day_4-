<template>
  <div>
    <div>
      <el-space direction="vertical">
        <el-text>
          <el-icon>
            <ElementPlus />
          </el-icon>Element-Plus
        </el-text>

        <el-row>
          <el-text>Rate</el-text>
          <el-rate v-model="rating" class="ml-1" :disabled="true" />
          <el-text>{{ rating }} sao</el-text>
        </el-row>

        <el-text>
          This is text mixed with icon
          <el-icon>
            <Bell />
          </el-icon>and component
          <el-button>Button</el-button>
        </el-text>
      </el-space>
    </div>
    <div>
      <div class="demo-collapse">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="Giới thiệu sản phẩm" name="1">
            <div>
              Consistent with real life: in line with the process and logic of real
              life, and comply with languages and habits that the users are used to;
            </div>
            <div>
              Consistent within interface: all elements should be consistent, such
              as: design style, icons and texts, position of elements, etc.
            </div>
          </el-collapse-item>
          <el-collapse-item title="Thông số" name="2">
            <div>
              Operation feedback: enable the users to clearly perceive their
              operations by style updates and interactive effects;
            </div>
            <div>
              Visual feedback: reflect current state by updating or rearranging
              elements of the page.
            </div>
          </el-collapse-item>
          <el-collapse-item title="Chọn size" name="3">
            <div>Simplify the process: keep operating process simple and intuitive;</div>
            <div>
              Definite and clear: enunciate your intentions clearly so that the
              users can quickly understand and make decisions;
            </div>
            <div>
              Easy to identify: the interface should be straightforward, which helps
              the users to identify and frees them from memorizing and recalling.
            </div>
          </el-collapse-item>
          <el-collapse-item title="Công dụng" name="4">
            <div>
              Decision making: giving advices about operations is acceptable, but do
              not make decisions for the users;
            </div>
            <div>
              Controlled consequences: users should be granted the freedom to
              operate, including canceling, aborting or terminating current
              operation.
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { ElRate, ElSpace, ElText, ElIcon, ElButton } from "element-plus";
import { ElementPlus, Bell } from "@element-plus/icons-vue";

export default {
  components: {
    ElRate,
    ElSpace,
    ElText,
    ElIcon,
    ElButton,
    ElementPlus,
    Bell
  },
  data() {
    return {
      rating: 3
    };
  }
};
</script>

<style scoped>
</style>
