<template>
    <van-tabbar v-model="active" active-color="#07c160"
      inactive-color="#000">
      <van-tabbar-item class="iconfont icon--HOME" to='/'>首页</van-tabbar-item>
      <van-tabbar-item class="iconfont icon--shujuchakan" to='/category'>分类</van-tabbar-item>
      <van-tabbar-item class="iconfont icon--liuyanban" to='/buy'>值得买</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-icon-test" to='shopCart'>购物车</van-tabbar-item>
      <van-tabbar-item class="iconfont icon--yonghu" to='/person'>个人</van-tabbar-item>
    </van-tabbar>
</template>
 
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name:'Footer',
  data () {
    return {
      active:0
    }
  }
}
</script>
 
<style lang="stylus"> rel="stylesheet/stylus"
  .van-tabbar 
    border-bottom 5px solid #EDEDED
    display flex
    width 100%
    font-size 14px
    position fixed
    bottom 0
    left 0
    .van-tabbar-item
      flex 1
      text-align center
      font-size 12px
    
</style>