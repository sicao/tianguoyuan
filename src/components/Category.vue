<template>
	<div class="app">
		<header>
			<div class="search">奇异果</div>
		</header>
		<div class="content1">
			<ul class="tab">
				<li v-for="(item,index) in classOneGroup">{{item.name}}</li>
			</ul>
			<div class="item">
				<h2>果园优选<span class="more">全部 <i>></i></span></h2>
				<div class="items">
					<dl v-for="item in childrenList">
						<dt><img :src="item.class_photo"></dt>
						<dd>{{item.name}}</dd>
					</dl>
				</div>
			</div>
		</div>		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				classOneGroup:[],
				childrenList:[]
			}
		},
		created(){		
			var _t =this;
			this.axios.get("../static/tablist.json",{
		
			}).then(function(res){
			console.log(res.data)
			_t.classOneGroup=res.data.data.classOneGroup;
			_t.childrenList=res.data.data.childrenList[0].class3Group
			});
		}
	}

</script>
<style scoped>
	@import '../assets/css/fenlei.css'
</style>