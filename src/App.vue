<template>
  <div id="app">
    <router-view/>
    <div class="footer" v-show="isShowFooter">
      <router-link to="/home">
        <i class='i1'></i>
        <span>首页</span>
      </router-link>
      <router-link to="/category">
        <i class="i2"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/cart">
        <em class="car" v-if="this.orderList.length>0?true:false">{{totalNum}}</em>
        <i class="i3"></i>
        <span>购物车</span>
      </router-link>
      <a :class="{active:check}" @click="judge()">
        <i class="i4"></i>
        <span>我的果园</span>
      </a>
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
    judge(){

      if(this.getCookie("Token")){
          this.$router.push({
            path: "/mine"
          })
      }else{

        this.$router.push({
          path: "/login"
        })
      }
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
    z-index: 4
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
   /*background-size: 100% 100%;*/
   text-align: center;
   margin:auto auto .01rem auto;

}
.i1{
  background: url(assets/img/footer1-1.jpg) no-repeat center;
  width: .22rem;
}
.i2{
  background: url(assets/img/footer2-1.jpg) no-repeat center;
    background-size: 100% 100%;
}
.i3{
  background: url(assets/img/footer3-1.jpg) no-repeat center;
  background-size: 100% 100%;
}
.i4{
  background: url(assets/img/footer4-1.jpg) no-repeat center;

  width: .19rem;
}
.router-link-active .i1{
  background: url(assets/img/footer1-2.jpg) no-repeat center;
}
.router-link-active .i2{
  background: url(assets/img/footer2-2.jpg) no-repeat center;
}
.router-link-active .i3{
  background: url(assets/img/footer3-2.jpg) no-repeat center;
}
.active .i4{
  background: url(assets/img/footer4-2.jpg) no-repeat center;
}
.active span{
    color: #65a032;
}
.router-link-active span{
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
