<template>
<div class="tuijianContainer">
  <div class="tuijianwraper">
    <Swiper/>
    <div class="msiteNav">
      <span>网易自营品牌</span>
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
    </div>
    <div class="misteUl">
      <ul class="msitelist">
        <li class="msiteitem" v-for="(item,index) in list" :key="index">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <div class="kouzao">
      <img src="https://yanxuan.nosdn.127.net/8b27123a11a46a3ae45cabf2a04760ef.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
      <img src="https://yanxuan.nosdn.127.net/fc6de7f29e2d40f7046deae7d0d6016c.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
    </div>
    <div class="xinren">
      <p>— 新人专享礼 —</p>

    </div>
  </div>
</div>
</template>
 
<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name:'Tuijian',
  computed: {
    ...mapState({
      list:state=>state.msite.list
    })
  },
  mounted () {
    this.scroll = new BScroll('.tuijianContainer',{
      // scrollY:true,
      scrollY:true ,
      click:true,
      bounce: false,
      mouseWheel: true
    })
  }
}
</script>
 
<style lang="stylus"> rel="stylesheet/stylus"
.tuijianContainer
  width 100%
  height 1000px
  .msiteNav
      display flex
      height 40px
      span 
        flex 1
        text-align center
        line-height 40px
  .misteUl
    width 100%
    height 200px
    padding 0 10px
    .msitelist
      display flex
      flex-wrap wrap
      .msiteitem
        display flex
        flex-direction column
        align-items center
        margin-right 15px
        margin-bottom 10px
        img 
          width 60px
          height 60px
          margin-bottom 8px
  .kouzao
    width 100%
    background-color rgb(238, 238, 238)
    padding 10px 10px 30px
    height 80px
    img 
      width 46%
      &:first-child
        margin-right 8px
  .xinren
    padding 15px
    height 1000px
    p
      width 100%
      text-align center
      font-size 18px
</style>