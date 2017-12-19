<template>
  <div>
    <div class="modal search-box">
            <div class="m-component-nav">
                <a href="###" @click="back()">
                    <div class="navbar-header">
                        <i class="iconfont icon-morehome"><</i>
                        <span>返回</span>
                    </div>
                </a>

                <div class="searchbar">
                    <img class="dajing" src="../assets/img/fangdajing.png" alt="">
                    <input type="text" placeholder="新鲜水果、生鲜">
                    <img class="tio" src="../assets/img/close_128px_1181757_easyicon.net.png" alt="">
                </div>
                <div class="sub-btn">
                    搜索
                </div>
            </div>
            <div class="da">
                <div class="keyword hot">
                    <div class="remen">
                        热门搜索
                    </div>
                    <div class="con">
                        <a href="#" class="cheng">橙</a>
                        <a href="##">提子</a>
                        <a href="##">樱桃</a>
                        <a href="##">苹果</a>
                        <a href="##">火龙果</a>
                        <a href="##">瓜</a>
                        <a href="##">羊蝎子</a>
                        <a href="##">雪花鲳</a>
                        <a href="##">奇异果</a>
                    </div>

                </div>
          </div>
      </div>
  </div>
</template>
<script>
  export default{
      methods:{
        back(){
          history.back()
        }

      }
  }
</script>
<style scoped>
    @import '../assets/css/sousuo.css'
</style>
