<template>
	<div>
		<div class="car-top">
			<div class="back"><</div>
			<div class="text">购物车</div>
			<div class="next">
				<span class="edit">编辑</span>
			</div>
		</div>
		<div class="empty" v-if="this.orderList.length>0?false:true">
			<img src="../assets/img/car.png">
			<div>还没找到心仪的商品吗?</div>
			<p>去逛逛吧</p>
		</div> 
		<div class="content">
			<div class="address" @click="changeStyle($event)">
				<span class="span1"></span>
				<span class="span2"></span>
				<div class="mid">
					<div><i></i>添加地址<span>></span></div>
				</div>
			</div>
			<div class="list-item">
				<div class="title2">
					<span>总重约2.5kg</span>
					商品清单
				</div>
				<ul>
					<li v-for="item in orderList">
						<div class="icon">
						<i @click="changeColor($event)">✔</i></div>
						<div class="pro-img">
							<img :src="item.image">
						</div>
						<div class="pro-info">
							<h3>{{item.title}}</h3>
							<h4></h4>
							<h5>
								<span>2斤</span>
								1.00kg
							</h5>
							<p>
								<span class="price">
									<small>￥</small><em>{{item.price}}</em><small></small>
								</span>
								<span class="tag1">
									明日达
								</span>
							</p>
							<div class="count">
								<span class="minus">
									<i @click="minus(item)"></i>
								</span>
								<span class="num">{{item.in_stock}}</span>
								<span class="add" >
									<i @click="adds(item)"></i>
								</span>
							</div>
						</div>
						<div class="clear"></div>
					</li>
				</ul>
				<div :style="{height:'95px',background:'#f5f5f5'}"></div>
			</div>
			<div class="bottom">
				<i></i>
				<span>全选</span>
				<div class="total">
					合计：
					<small>￥</small><em v-model="total">{{totalMoney}}</em><small></small>
				</div>
				<div class="btn">
					<span class="myspan1">结算</span>
					<!-- <span class="myspan2">删除</span> -->
				</div>
			</div>
		</div>
		<div class="address-prop">
			<div class="title"><span @click="close()">✖</span>收货地址</div>
			<div class="new-address"><a href="address.html">新增地址</a></div>
		</div>
		<div id="lightBox" v-show="show"></div>
	</div>
</template>
<script>
	export default{
		mounted: function(){
			this.orderList = this.$store.getters.getOrderList;
			this.flags = this.$store.getters.getFlag
		},

		data(){
			return{
				orderList:[],
				flags:"",
				show:false,
				flag:true,
				total:69.8,		
			}
		},
		methods:{
			adds(item){
				item.in_stock++
			},
			minus(item){
				item.in_stock--;
				if (item.in_stock==0) {
					var f =confirm("要删除吗");

					if(f)this.$store.dispatch("minusOrder", item);
				}
			},				
			changeStyle:function(e){
				document.querySelector(".address-prop").style.bottom=0;
				this.show=true;			
			},
			close:function(){
				this.show=false;
				document.querySelector(".address-prop").style.bottom="-4.45rem";
			},
			changeColor:function(e){
				if(this.flag==true){
					e.currentTarget.style.backgroundColor="white";
					e.currentTarget.style.border="1px solid #bfbfbf";
					this.flag=false;
				}else{
					e.currentTarget.style.backgroundColor="#ff8000";
					e.currentTarget.style.border="none";
					this.flag=true;
				}				
			}
		},
		computed:{
			totalMoney(){
				var totalMoney=0;
				this.orderList.forEach((n)=>{
					totalMoney += n.in_stock * n.price;
				});
				return totalMoney;
			}

		}
	}
</script>
<style scoped>
	@import '../assets/css/car.css'
</style>