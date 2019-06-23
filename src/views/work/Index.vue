<template>
  <div>
    <iv-sidebar></iv-sidebar>
  </div>
</template>

<script>
import IvSidebar from '@/components/Sidebar/Index'
export default {
  name: 'Index',
  components: {
    IvSidebar
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>

</style>
