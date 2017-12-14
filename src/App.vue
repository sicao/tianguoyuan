<template>
  <div id="app">
    <router-view/>
    <div class="footer" v-if="this.proList!=0?false:true">
      <router-link to="/home">
        <i></i>
        <span>首页</span>
      </router-link>
      <router-link to="/category">
        <i></i>
        <span>分类</span>
      </router-link>
      <router-link to="/cart">
        <em class="car" v-if="this.orderList.length>0?true:false">{{totalNum}}</em>
        <i></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/mine">
        <i ></i>
        <span>我的果园</span>
      </router-link>
    </div>
  </div>
</template>

<script>

export default{
  name: 'app',
  mounted: function(){
    this.orderList = this.$store.getters.getOrderList;
    this.proList = this.$store.getters.getProlist;
  },
  data(){
    return{
      proList:[],
      orderList: []
    }
  },
  computed:{
    totalNum(){
      var totalNum = 0;
      this.orderList.forEach((n, index) => {
        totalNum += Number(n.in_stock);
      })
      return totalNum;
    }
  }
}
</script>

<style>
.footer{
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    position: fixed;
    box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
    background: #fff;
    height: .42rem;
    font-size: .1rem;
    line-height: 1.2;
    vertical-align: middle;
    z-index: 9
}
.footer a{
  position: relative;
  width: 25%;
  color: #898989;
    display: block;
    float: left;
    text-align: center;
    -webkit-box-flex: 1;
    width: 25%;
    text-align: center;
    padding: .03rem 0;

}
  .footer a i{
   display: block;
   width: .26rem;
   height: .22rem;
   background: url(assets/img/footer1-1.jpg);
   background-size: 100% 100%;
   text-align: center;
   margin:auto auto .01rem auto;

}
.footer a:nth-of-type(1) i{
  width: .22rem;
}
.footer a:nth-of-type(2) i{
  background: url(assets/img/footer2-1.jpg);
    background-size: 100% 100%;
}
.footer a:nth-of-type(3) i{
  background: url(assets/img/footer3-1.jpg);
  background-size: 100% 100%;
}
.footer a:nth-of-type(4) i{
  /*background: url(assets/img/footer4-2.jpg);*/
  background-size: 100% 100%;
  width: .19rem;
}
.footer a:nth-of-type(4){
  color: #65a032;
}
.car{
  box-sizing: content-box;
    background: #ff4848;
    line-height: .14rem;
    border-radius: .15rem;
    min-width: .14rem;
    padding: 0 .02rem;
    color: #fff;
    top: .03rem;
    right: auto;
    bottom: auto;
    left: 50%;
    position: absolute;
    margin-left: .12rem;
}

</style>
