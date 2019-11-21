<template>
  <div class="footer-wrapper">
    <a href="#">XX有限公司@2019</a>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
.footer-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background: #000;
}
</style>
