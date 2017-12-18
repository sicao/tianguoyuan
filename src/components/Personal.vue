<template>
<div>
  <div class="nav5">
		<div class="back5"><a href="###" @click="back()"><</a></div>
		<div class="text5">个人信息</div>
	</div>
	<!-- 身体 -->
	<div class="main5">
		<div class="info-model line"></div>
		<div class="info-model">
			<div class="left">昵称</div>
			<div class="right">13512349876</div>
		</div>
		<div class="info-model">
			<div class="left">会员等级</div>
			<div class="right grade1"><img src="../assets/img/old_v0.png"></div>
		</div>
		<div class="info-model">
			<div class="left">性别</div>
			<div class="right baomi">保密</div>
		</div>
		<div class="info-model">
			<div class="left">生日</div>
			<div class="right">0</div>
		</div>
		<div class="info-model">
			<div class="left">地址管理</div>
			<div class="right dizhi"></div>
		</div>
	</div>
	<!-- 脚部 -->
	<div class="p-footer">
		<a href="###" @click="exit()">退出登录</a>
	</div>


</div>

</template>
<script>
export default{
    methods:{
      getCookie(name){
         var cookie1 = document.cookie;
         //user=tangcaiye; pass=12345; xx=343;
         //user,tangcaiye; pass,12345
         // 由于存放时是按照分号加一个空格进行划分的，所以在这里使用`; `作为分割符
         var arr = cookie1.split("; ");

         for (var i=0; i<arr.length; i++){
           var arr2 = arr[i].split("=");
           //arr2[0]->user,arr2[1]->tangcaiye;  arr2[0]->pass,
           if (arr2[0]==name){
             return arr2[1];
           }
         }
       //alert(arr);
         return false;
   },
      setCookie(name,value,day){
          var date1 = new Date();
          var nowDate = date1.getDate();
          date1.setDate(nowDate+day);
          document.cookie = name+"="+value+"; expires="+date1;
      },
      exit(){
          this.setCookie("Token","",-1);
          this.$router.push({path: "/login"})
      },
      back(){
        history.back();

      }


    }
}

</script>
<style scoped>
    @import '../assets/css/personal.css'
</style>
