<template>
  <div class="header-wrapper">
    <el-row>
      <el-col :span="12">
        <a href="#" class="header-logo">IV Center</a>
      </el-col>
      <el-col :span="12" align="right">右侧</el-col>
    </el-row>
    <el-row>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <router-link tag="a" :to="{ name: 'home'}">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2" disabled>
          <router-link tag="a" :to="{ name: 'home'}">生态</router-link>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <router-link tag="a" :to="{ name: 'home'}">知识库</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link tag="a" :to="{ name: 'project'}">我的工作台</router-link>
        </el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.header-wrapper {
  position: fixed;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #1979CA;
  color: #000;
}

.header-wrapper > .el-row {
  height: 50px;
  line-height: 50px;
  padding: 0 2%;
}

.header-wrapper > .el-row:first-child {
  border-bottom: 1px solid red;
}

.header-logo {
  color: #fff;
}

.header-logo:hover {
  color: #1979CA;
}

.el-menu--horizontal>.el-menu-item {
  height: 50px;
  line-height: 50px;
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
  background: #1979CA;
}

.el-menu--horizontal>.el-menu-item, .el-menu--horizontal>.el-menu-item > a {
  font-weight: bold;
  color: #000;
}
</style>
