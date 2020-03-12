<template>
 <div class="app">
   <router-view></router-view>
   <Footer/>
 </div>
</template>
 
<script>
import Footer from './components/footer/Footer'
export default {
  name:'App',
  components: {
    Footer
  },
}
</script>
 
<style lang="stylus"> rel="stylesheet/stylus"
  .app
    height 100%
</style>