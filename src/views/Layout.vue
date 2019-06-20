<template>
  <div>
    <el-container>
      <iv-header></iv-header>
      <div>
        <router-view></router-view>
      </div>
      <iv-footer></iv-footer>
    </el-container>
  </div>
</template>

<script>
import IvHeader from '../components/Header'
import IvFooter from '../components/Footer'
export default {
  name: 'Layout',
  components: {
    IvHeader,
    IvFooter
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
