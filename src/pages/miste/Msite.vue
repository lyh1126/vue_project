<template>
  <div class="msiteContainer">
    <div class="msiteHeader">
      <header class="header">
        <div class="header-top">
          <a href="https://m.you.163.com/">网易严选</a>
          <div class="search">
            <img src="./images/1.png" alt="">
            <span>搜索商品，共24027款好物</span>
          </div>
          <span class="login">登录</span>
        </div>
      </header>
      <van-tabs v-model="active" title-active-color="red" >
        <van-tab title="推荐" to='/'></van-tab>
        <van-tab title="居家生活" to='/msite/shenghuo' ></van-tab>
        <van-tab title="服饰鞋包" to='/msite/fsxb'></van-tab>
        <van-tab title="美食酒水" to='/msite/msjs'></van-tab>
        <van-tab title="个护清洁" to='/msite/ghqj'></van-tab>
        <van-tab title="母婴亲子" to='/msite/myqz'></van-tab>
        <van-tab title="运动旅行" to='/msite/ydlx'></van-tab>
        <van-tab title="数码家电" to='/msite/smjd'></van-tab>
        <van-tab title="全球特色" to='/msite/qqts'></van-tab>
      </van-tabs>
      <div class="right">
        <img src="./images/2.png" alt="">
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
 
<script>
// import BScroll from 'better-scroll'
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
export default {
  name:'Msite',
  data () {
    return {
      active:0
    }
  },
  mounted () {
    // //创建导航滚动对象
    // this.scrollNav = new BScroll('.van-tabs__wrap',{
    //   scrollX:true,
    // })

    this.$store.dispatch('getList')

  }
 

}
</script>
 
<style lang="stylus"> rel="stylesheet/stylus"
  .msiteContainer
    .msiteHeader
      position relative
      z-index 99
      width 100%
      background-color #fff
      .header
        position relative
        padding 10px 10px 0
        .header-top
          display flex
          align-items center
          margin-bottom 10px
          a
            font-size 16px
            color #000
            &.router-link-active
              color red
          .search
            background-color #ededed
            margin 0 8px
            border-radius 5px
            width 230px
            box-sizing border-box
            height 30px
            display flex
            align-items center
            padding 0 20px
            font-size 14px
            color #666
            img 
              width 16px
              height 16px
              margin-right 5px
          .login 
            border 1px solid red
            color red
            width 37px
            height 20px
            border-radius 5px
            font-size 12px
            text-align center
            line-height 20px
      .van-tabs__wrap
        width 390px
        .van-tabs__nav
          display flex
          width 350px
          .van-tab
            text-align center
            box-sizing border-box
      .right
        position absolute
        top 50px
        right 20px
        img 
          width 18px
          height 16px
      
</style>