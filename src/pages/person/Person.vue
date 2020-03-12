<template>
 <div class="personContainer">
   <header>
     <img src="./images/1.png" alt="" class="imgLeft">
     <span class="headerTxt">网易严选</span>
     <img src="./images/2.png" alt="" class="imgCenter">
     <img src="./images/3.png" alt="" class="imgRight">
   </header>
   <div class="personLogin" v-show="isShow">
     <div class="loginTop">
      <img src="./images/4.png" alt="">
     </div>
    <div class="loginBtn">
      <mt-button type="danger" size="large" class="btn" @click="gotoLogin(true)">
        <img src="./images/5.png" height="20" width="20" slot="icon">
        手机号快捷登录
        </mt-button>
      <mt-button type="default" size="large" class="btn" @click="gotoLogin(false)">
        <img src="./images/6.png" height="20" width="20" slot="icon">
        邮箱账号登录
      </mt-button>
    </div>
   </div>
   <div class="phone" v-show="isShowPhone">
     <div class="phoneTop">
      <img src="./images/10.png" alt="">
     </div>
     <div class="phoneBottom">
       <input type="tel" maxlength="11" placeholder="请输入手机号" v-model="phone" name="phone" v-validate="'required'">
       <span style="color:red">{{ errors.first('phone') }}</span>
       <div class="phoneMsg">
         <input type="tel" placeholder="请输入短信验证码" maxlength="6" v-show="isShowMsg" v-model="msg" name="msg" v-validate="'required'">
        <span style="color:red">{{ errors.first('msg') }}</span>

         <input type="password" placeholder="请输入密码" maxlength="6" v-show="!isShowMsg">
         <div class="phoneMsgRight">获取验证码</div>
       </div>
       <div class="msgChange">
         <span>{{isShowMsg?'遇到问题？':'忘记密码？'}}</span>
         <a href="javascript::" @click="change">{{isShowMsg?'使用密码验证登录':'短信快捷登录'}}</a>
       </div>
        <mt-button type="danger" size="large" @click="gotoMsite">登录</mt-button>
        <div class="argree" v-show="isShowMsg">
          <input type="checkbox" name="checkbox" class="inputBox" v-model="checkBox" >
          <div class="argreeRight">
            我同意
            <a href="">《服务条款》</a>
            和
            <a href="">《网易隐私政策》</a>
          </div>
        </div>
        <div class="footer" @click="goBack">其他登录方式></div>
     </div>
   </div>
   <div class="emali" v-show="isShowEmail">
     <div class="emaliTop">
      <img src="./images/10.png" alt="">
     </div>
     <div class="emailInput">
       <input type="text" value="" placeholder="邮箱账号">
       <input type="password" value="" placeholder="密码">
     </div>
     <div class="emailMsg">
       <span>注册密码</span>
       <span>忘记密码</span>
     </div>
     <mt-button type="danger" size="large">登录</mt-button>
     <div class="emailFooter" @click="goBack">其他登录方式></div>
   </div>
 </div> 
</template>


 
<script>
import { Toast } from 'mint-ui';
export default {
  name:'Person',
  data () {
    return {
      isShow:true,
      isShowPhone:false,
      isShowEmail:false,
      isShowMsg:true,
      phone:null,
      msg:null,
      checkBox:false
    }
  },
  methods: {
    gotoLogin(tag){
      this.isShow = false
      if(tag){
        this.isShowPhone = !this.isShowPhone
      }else{
        this.isShowEmail = !this.isShowEmail
      }
    },

    change(){
      this.isShowMsg = !this.isShowMsg
    },
    goBack(){
      this.isShow = true
      this.isShowPhone = false
      this.isShowEmail = false
    },
    //登录按钮操作
    gotoMsite(){
      // console.log(this.checkBox)
      //校验表单
       this.$validator.validateAll().then(result=>{
          if (result) {
           //表单校验成功
           if(this.checkBox){
             //全部成功
             //登录，存储用户信息，用户信息存到VUEx中，token存到localstore中，跳转msite界面
              this.$store.dispatch('getUser')

              this.$router.replace('/')

           }else{
            Toast('请同意条款！')


           }
          } else {
           //表单校验失败
           Toast('表单错误，请检查！')
          }
       })
    }
  }
}
</script>
 
<style lang="stylus"> rel="stylesheet/stylus"
body
  height 100%
  .personContainer
    width 100%
    height 100%
    position relative
    header
      display flex
      height 40px
      width 100%
      align-items center
      background-color rgb(216, 219, 218)
      img 
        width 26px
        height 26px
        vertical-align middle
      .imgLeft
        margin-left 10px
        margin-right 100px
      .imgCenter
        margin-left 80px
        margin-right 20px
        margin-top 10px
      .headerTxt
        font-size 18px
        vertical-align middle
    .personLogin
      width 100%
      height calc(100% - 40px)
      background-color #F2F4F5   
      .loginTop
        width 100%
        padding 100px 0
        text-align center
        img 
          transform scale(.8)
      .loginBtn
        width 90%
        margin 0 auto
        .btn
          height 50px
          font-size 14px
          &:last-child
            margin-top 15px
            border 1px solid #DD1A21
    .phone
      width 100%
      .phoneTop
        width 100%
        padding 40px 0
        text-align center
        img 
          transform scale(.8)
      .phoneBottom
        width 90%
        margin 0 auto
        input
          width 100%
          height 40px
          border-bottom 1px solid #F2F4F5
          &:first-child
            margin-bottom 20px
        .phoneMsg
          position relative
          .phoneMsgRight
            position absolute
            top 10px
            right 0
            border 1px solid #000
            width 80px
            height 22px
            text-align center
            line-height 22px
        .msgChange
          width 100%
          height 40px
          span 
            float left
          a
            float right
        .argree
          width 100%
          padding 15px 0
          display flex
          align-items center
          .inputBox 
            width 20px
            height 20px
            margin-bottom 0
            margin-right 5px
          .argreeRight a
            color blue
        .footer
          width 100%
          text-align center
    .emali
      width 90%
      margin 0 auto
      .emaliTop
        width 100%
        padding 40px 0
        text-align center
        img 
          transform scale(.8)
      .emailInput input
        width 100%
        height 40px
        border-bottom 1px solid #F2F4F5
        &:first-child
          margin-bottom 20px
      .emailMsg
        width 100%
        height 60px
        line-height 60px
        span
          font-size 16px
          &:first-child
            float left
          &:last-child
            float right
      .emailFooter
        width 100%
        height 40px
        text-align center
        line-height 40px
</style>