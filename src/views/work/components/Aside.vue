<template>
  <div class="aside-wrapper">
    <el-row>
      <el-col :span="8">
        aside
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.aside-wrapper {
  height: 100%;
  background: red;
}
</style>
