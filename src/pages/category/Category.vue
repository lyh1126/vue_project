<template>
 <div class="categoryContainer">
   <div class="header">
     <div class="header-content">
        <img src="./images/1.png" alt="">
        <span>搜索商品，共23634款好物</span>
     </div>
   </div>
   <div class="categoryContent">
      <ul class="wrap">
        <li :class="{on:on === li.id}" v-for="(li,index) in listArr" :key="index" @click="gotoItem(index,li)" >{{li.name}}</li>
      </ul>
      <div class="right">
        <div class="rightTop">
          <img src="https://yanxuan.nosdn.127.net/2ac8dde0444ba9b06991c20087d37967.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
        </div>
        <ul class="rightUl">
          <li v-for="(item,index) in datas" :key="index">
            <img :src="item.bannerUrl" alt="">
            <span>{{item.name}}</span>
          </li>
        </ul>
        <ul class="rightUlBottom"></ul>
      </div>
  </div>  
</div>
</template>
 
<script>
import BScroll from 'better-scroll'
import {reqCategoryList,reqListDates} from '../../api'
export default {
  name:'Category',
  computed: {
    on(){
      return this.$route.query.categoryId*1 || 11
    },
    datas(){
      return this.listItem
    }
  },
  data () {
    return {
      listArr:[], 
      listItem:[]
    }
  },
  methods: {
    gotoItem(index,li){
      let ID = +this.$route.query.categoryId
      if(ID !== li.id)
        this.$router.replace('/category?categoryId='+li.id)
        // console.log(this.$route)
    }
  },
  async mounted () {
    const result = await reqCategoryList()
    this.listArr = result
      // console.log(result)

    this.$nextTick(async ()=>{
      this.scroll = new BScroll('.categoryContent',{
      scrollY:true,
      click:true
    })


    const liList = await reqListDates()
    console.log(liList)
    this.listItem = liList.find(item => item.id === this.on).categoryList
    console.log(this.listItem)
    })

    
  }
}
</script>
<style lang="stylus"> rel="stylesheet/stylus"
body
  width 100%
  height 100%
  .categoryContainer
    width 100%
    height 100%
    .header
      position relative
      z-index 99
      background-color #fff
      padding 8px 10px
      border-bottom 1px solid #EDEDED
      .header-content
        background-color #EDEDED
        border-radius 5px
        text-align center
        height 30px
        img 
          width 14px
          height 14px
          margin-right 5px
          vertical-align middle
        span 
          vertical-align middle
          line-height 30px
    .categoryContent
      height 100%
      display flex
      .wrap
        width 80px
        display flex
        flex-direction column
        align-items center
        border-right 2px solid #EDEDED
        li
          font-size 14px
          text-align center
          color #333
          height 30px
          line-height 30px
          margin 8px 0
          width 100%
          &.on
            color #AB2B2B
            position relative
            &::before
              content ''
              position absolute
              width 3px
              height 30px
              background #AB2B2B
              left 0
              top 0
      .right
        padding 15px 15px 0
        flex 1
        .rightTop img 
          width 100%
          height 100px
        .rightUl
          display flex
          width 100%
          flex-wrap wrap
          li
            display flex
            flex-direction column
            align-items center
            flex 1
            padding 10px 0
            img 
              width 70px
              height 70px
            span
              font-size 12px
          
        
</style>