<template>
	<div class="detail">
			<!-- 头部 -->
	<div class="nav1">
		<div class="back1" @click="back()"><span ><</span></div>
		<div class="tab1">
			<ul class="tab-menu">
				<li class="active1">商品</li>
				<li>详情</li>
				<li>评价</li>
			</ul>			
		</div>
		<div class="more1">
			<i class="more-inicon"></i>
			<div></div>
			<div></div>			
		</div>
	</div>	
	<!-- 身体 -->
	<div class="main1">
		<!-- 商品轮拔图 -->
		<div class="detail" v-for="item in proList">
			<div class="SPbanner">
				<ul class="picList">
					<li><img :src="item.image"></li>				
				</ul>
				<div class="picListball">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<!-- 商品价格 -->
			<div class="info-item" >
				<h3>{{item.title}}</h3>
				<h4>{{item.subtitle}}</h4>
				<div class="price">
					<small>￥</small><em>{{item.price}}</em><small></small>
				</div>
				<div class="size">
					<span>
						<strong>{{item.volume}}</strong>
						<small>明日达</small>
					</span>
					<em>最快明天09:00-18:00送达</em>
				</div>
				<h5>单重1000-1250g</h5>			
			</div>
		</div>
		<!-- 送货至 -->
		<div class="address-item">
			<span>送至</span>
			<h4><i></i><em>回龙观街道</em></h4>
		</div>
		<!-- 48小时退换货全程冷链部分 -->
		<div class="tips-item">
			<span><i></i><em>48小时退换货</em></span>
			<span><i></i><em>全程冷链</em></span>
			<span><i></i><em>果园标准</em></span>
			<span><i></i><em>全球直采</em></span>			
		</div>
		<!-- 商品评价部分 -->
		<div class="comment-item">
			<div class="comment-total">
				<span>
					<small>97%</small>
					好评
					<i>></i>
				</span>
				<p>评价(6374)</p>				
			</div>
			<div class="comment-con-chief">
				<div class="comment-info">
					<img src="../assets/img/default_userpic.png">
					<span class="user">137****7715</span><i></i>
					<span class="date">2017-11-08</span>
				</div>
				<div class="comment-level">
					<span>口感 5</span>
					<span>颜值 5</span>
				</div>
				<p class="comment-msg">味道不错 甜 价格实惠</p>
			</div>
			<div class="comment-con-chief">
				<div class="comment-info">
					<img src="../assets/img/default_userpic.png">
					<span class="user">137****7715</span><i></i>
					<span class="date">2017-11-08</span>
				</div>
				<div class="comment-level">
					<span>口感 5</span>
					<span>颜值 5</span>
				</div>
				<p class="comment-msg">回购了两次，还可以</p>
				<img src="../assets/img/photo0.jpg">
			</div>
			<div class="comment-con-chief">
				<div class="comment-info">
					<img src="../assets/img/pic1.jpg">
					<span class="user">137****7715</span><i></i>
					<span class="date">2017-11-08</span>
				</div>
				<div class="comment-level">
					<span>口感 5</span>
					<span>颜值 5</span>
				</div>
				<p class="comment-msg">必须好评，这个价格没的说，口感更是没的说</p>
			</div>
		</div>
	</div>	
	<!-- 脚部 -->
	<div class="footers">
		<a href="###" class="cart-btn">
			<i></i>
			<span>1</span>
		</a>
		<a href="###" class="add-cart">
			<span>明日达</span>
			<em>加入购物车</em>
		</a>
		
	</div>
	</div>
</template>
<script >
	export default{
		mounted(){
			this.proList = this.$store.getters.getProlist
		},
		data(){
			return{
				proList:[]
			}
		},
		methods:{
			back(){
				history.back();
                this.$store.dispatch("empty");
           
			}
		}
	}
</script>
<style>
	@import '../assets/css/commodity.css'
</style>