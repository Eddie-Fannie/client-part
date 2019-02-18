<template>
<div class="ui-header">
  <el-menu
    :gutter="0"
    :default-active="activeIndex2"
    class="el-menu-demo el-row"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <img src="../../assets/img/GDUT_logo_school1.png" class="el-col el-col-4 el-col-xl-4 img el-col-xs-3">
    <el-menu-item index="1" class="el-col el-col-2 el-col-xl-2 el-col-xs-3"><router-link to="/index">首页</router-link></el-menu-item>
    <el-submenu index="2" class="el-col el-col-2 el-col-xl-2 el-col-xs-3">
      <template slot="title"><router-link to="/news">就业新闻</router-link></template>
      <el-menu-item index="2-1"><router-link to="/news">省内新闻</router-link></el-menu-item>
      <el-menu-item index="2-2"><router-link to="/sch-news">校内新闻</router-link></el-menu-item>
      <el-menu-item index="2-3"><router-link to="/col-news">学院新闻</router-link></el-menu-item>
    </el-submenu>
    <el-submenu index="3" class="el-col el-col-2 el-col-xl-2 el-col-xs-3">
      <template slot="title"><router-link to="/teach">就业指导</router-link></template>
      <el-menu-item index="3-1"><router-link to="/teach">面试经历</router-link></el-menu-item>
      <el-menu-item index="3-2"><router-link to="/cv">简历制作</router-link></el-menu-item>
    </el-submenu>
    <el-submenu index="4" class="el-col el-col-2 el-col-xl-2 el-col-xs-3">
      <template slot="title"><router-link to="/advertises">招聘信息</router-link></template>
      <el-menu-item index="4-1"><router-link to="/advertises">职位信息</router-link></el-menu-item>
      <el-menu-item index="4-2"><router-link to="/sch-campus">校园宣讲会</router-link></el-menu-item>
      <el-menu-item index="4-3"><router-link to="/job-campus">校园招聘会</router-link></el-menu-item>
    </el-submenu>
    <el-submenu index="5" class="el-col el-col-2 el-col-xl-2 el-col-xs-3">
      <template slot="title"><router-link to="/study">学习</router-link></template>
      <el-menu-item index="5-1"><router-link to="/study">资料</router-link></el-menu-item>
      <el-menu-item index="5-2"><router-link to="/project">项目实战</router-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="6" class="el-col el-col-2 el-col-xl-2 el-col-xs-3"><router-link to="/chat">讨论区</router-link></el-menu-item>
    <el-menu-item index="7" class="el-col el-col-2 el-col-xl-2 el-col-xs-3"><router-link to="/find">发现</router-link></el-menu-item>
    <div class="el-col el-col-2 el-col-xl-2 hidden-md-and-down"></div>
    <el-menu-item index="8" class="el-col el-col-2 el-col-xl-2 hidden-md-and-down"><router-link to="/login">登录</router-link></el-menu-item>
    <el-menu-item index="9" class="el-col el-col-2 el-col-xl-2 hidden-md-and-down"><router-link to="/register">注册</router-link></el-menu-item>
    <div class="el-col el-col-4 el-col-xl-4 hidden-md-and-down" id="user" v-if="show"><router-link to="/userInfo" class="userName">欢迎您</router-link><img src="../../assets/img/userLogo.png" class="userIcon"></div>
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'Ui-Header',
  data () {
    return {
      activeIndex2: '1',
      show: false
    }
  },
  watch: {
    $route () {
      this.handleSelect(this.activeIndex2)
    }
  },
  methods: {
    handleSelect (key) {
      console.log(key)
      this.activeIndex2 = key
    }
  }
}
</script>
<style lang="less">
  a{
    color: rgb(255, 255, 255);
  }
  .el-row{
    width: 100%;
    height: 60px;
    &:before{
       display: table;
     }
  }
  .el-col {
    display: inline-block;
  }
  .router-link-exact-active ,.router-link-active{
    border-bottom-color:rgb(255,208,75);
    color:rgb(255,208,75);
    background-color: rgb(84,92,100);
  }
</style>
<style lang="less" scoped>
.ui-header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  .img{
    height: 60px;
    border-bottom: 2px solid rgb(84, 92, 100);
  }
  div{
    display: inline-block;
    height: 60px;
    border-bottom: 2px solid rgb(84, 92, 100);
  }
  #user{
    position: relative;
    .userName{
      color: rgb(255,255,255);
    }
    .userIcon{
      position: absolute;
      right:80px;
      top:10px;
      float: right;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
