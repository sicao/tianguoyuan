<template>
    <div id="lightBox">
          <div class="boxs">
            <p class="dp"> 您还没登录，请先登录</p>
            <p class="cp">
              <span @click="quxiao()">取消</span>
              <span @click="queding()">确定</span>
            </p>
          </div>
    </div>
</template>
<script>
  export default{
      methods:{
        quxiao(){
          this.$store.state.isshowlogin = false;
        },
        queding(){
          this.$router.push({
            path: "/login"
          })
        }
      }
  }
</script>
<style>
    #lightBox{
      z-index:90;
      background: rgba(0,0,0,.5);
      top: 0;
      bottom: auto;
      left: 0;
      width: 100%;
      position: fixed;
      height: 100%;
    }
    .boxs{
      position: fixed;
      z-index: 99;
      top: 50%;
      left: 50%;
      width: 270px;
      min-height: 150px;
      transform:translate(-50%,-50%);
      background: #fff;
      overflow: hidden;
      border-radius: .06rem .06rem .06rem .06rem;
      -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
    }
    .boxs .dp{
      display: table;
      width: 100%;
      height: 105px;
      color: #000;
      text-align: center;
      line-height: 1rem;
      border-bottom:1px solid #bfbfbf;
    }
    .boxs .cp{
        display: flex;

    }
    .boxs span{
      flex:1;
      text-align: center;
      color:#008eff;
      font-size: .17rem;
      height:.46rem;
      line-height: .46rem
    }
    .cp span:first-child{
      border-right: 1px solid #bfbfbf
    }

</style>
