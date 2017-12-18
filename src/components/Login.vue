<template>
  <div>
  <div class="nav4">
    <div class="back4"><a href="###"><</a></div>
    <div class="text4">手机号快捷登陆</div>
  </div>
  <div class="formbox">
      <!-- 身体登陆的form表单 -->
      <form class="DL-form" v-show="isshow">
      <div class="DL-formin">
        <i class="phone_pic"></i>
        <div class="phonein">
          <input type="text4" name="" placeholder="手机号">
        </div>
        <span>获取验证码</span>
      </div>
      <div class="DL-formin">
        <i class="yan_zm"></i>
        <div class="phonein">
          <input type="text" name="" placeholder="短信验证码">
        </div>
      </div>
      <P class="tips">首次用手机号登录将自动为您注册，并有豪礼相送。</P>
      <a href="###" class="btn-login">登录</a>
      <div class="tab4">
        <a href="###" @click="change">账号密码登录</a>
        <a href="###">未收到验证码?</a>
      </div>
    </form>
      <!-- 手机号登陆隐藏部分 -->
      <form class="DL-form phone-DL" v-show="!isshow">
      <div class="DL-formin">
        <i class="phone_pic"></i>
        <div class="phonein">
          <input type="text" name="" placeholder="手机号" v-model="tellNum">
        </div>
      </div>
      <div class="DL-formin">
        <i class="phone-password"></i>
        <div class="phonein">
          <input type="password" name="" placeholder="密码" v-model="pwdNum">
        </div>
      </div>
      <p class="tips"></p>
      <a href="###" class="btn-login phone-dengluanniu" :class="{active1:active}" @click="login">登录</a>
      <div class="tab4">
        <a href="###" @click="change">账号密码登录</a>
        <a href="###">未收到验证码?</a>
      </div>
    </form>
  </div>

</div>
</template>
<script>
    export default{
        data(){
          return{
            isshow:true,
            pwdNum:"",
            tellNum:"",
            active:false
          }
        },
        watch:{
          tellNum(cur,old){
            console.log(cur,old)
            if(cur.length>11){
                this.tellNum=old;
            }
            if(this.tellNum.length>=11&&this.pwdNum.length>6){
                this.active=true
            }else{
              this.active=false
            }
          },
          pwdNum(cur,old){
            if(cur.length>=18){this.pwdNum=old;}
            if(this.tellNum.length>=11&&this.pwdNum.length>6){
              this.active=true
            }else{
              this.active=false
            }
          }
        },
        methods:{
            setCookie(name,value,day){
                var date1 = new Date();
                var nowDate = date1.getDate();
                date1.setDate(nowDate+day);
                document.cookie = name+"="+value+"; expires="+date1;
            },
            removeCookie(name){
                setCookie(name,".",-1);
            },
            change(){
                this.isshow = !this.isshow
            },
            login(){
              this.axios.get('http://127.0.0.1:8888/checkUser?username='+this.tellNum+'&password='+this.pwdNum).then(res=>{
                console.log(res.data);
                if(res.data.length == 1){
                    //在cookie中加入Token
                    this.setCookie('Token',true,1)
                    this.$router.push({path: "/mine"})
                }else{
                    alert("用户名或密码错误")
                }
              })
            }
        }
    }
</script>
<style scoped>
@import '../assets/css/deng_lu.css'
</style>
