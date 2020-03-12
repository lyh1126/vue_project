<template>
 <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/1f5bb4a08cc1c485d16b1638b75e885b.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/291f05d639363a80382fb4e21cb8f123.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/6420135fe97bdf81cb7c12112885fcc9.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/313a40161016d4ac55d2a4c52d6172b3.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/512382eeab6b4429779962e1642f0c4b.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
         <img src="https://yanxuan.nosdn.127.net/d46d2fd850b9a660eca68028fe974bb0.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/29f2685c38cbb22b41c41b7f6155506f.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/313a40161016d4ac55d2a4c52d6172b3.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev">1</div> -->
    
    <!-- 如果需要滚动条
    <div class="swiper-scrollbar"></div> -->
</div>
</template>
 
<script>
import Swiper from 'swiper'
// 引入Swiper的样式
import 'swiper/css/swiper.css'
export default {
  name:'Swiper',
  mounted () {
    new Swiper ('.swiper-container', {
    autoplay:true,
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
  }
}
</script>
 
<style lang="stylus"> rel="stylesheet/stylus"
  .swiper-container 
    width 100%
    .swiper-wrapper
      width 100%
      height 200px
      .swiper-slide
        width 100%
        height 100%
        img 
          width 100%
          height 100% 
    .swiper-pagination-bullet
        width 25px
        height 2px
        background-color #fff
        border-radius 0
</style>