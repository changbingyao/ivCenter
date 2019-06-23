
<template>
  <div class="sidebar-wrapper">
    <el-row>
      <el-col :span="8">
        sidebar
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.sidebar-wrapper {
  width: 300px;
  height: 100%;
  background: red;
}
</style>
