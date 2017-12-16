<template>
	<div class="app">
		<header>
			<div class="search">奇异果</div>
		</header>
		<div class="content1">
			<ul class="tab">
				<li v-for="(item,index) in classOneGroup" :key="item.id" @click="show(index)">{{item.name}}</li>
			</ul>
			<div class="item" >
				<h2>{{name}}<span class="more">全部 <i>></i></span></h2>
				<div class="items">
					<dl v-for="item in class3Group" :key="item.id">
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
				childrenList:[],
				itemIndex: 0,
				class3Group: [],
				name: '果园优选'
			}
		},
		created(){		
			this.axios.get("../static/kindData.json",{
		
			}).then((res) => {
			this.classOneGroup=res.data.data.classOneGroup;
			this.childrenList=res.data.data.childrenList;
			this.class3Group = this.childrenList[this.itemIndex].class3Group;
			});
		},
		methods:{
			show(index){
				this.itemIndex = index;
				this.class3Group = this.childrenList[this.itemIndex].class3Group;
				this.name = this.childrenList[this.itemIndex].class2Name.name
			}
		}
	}

</script>
<style scoped>
	@import '../assets/css/fenlei.css'
</style>