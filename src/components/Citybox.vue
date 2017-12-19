<template>
  <div id="citybox">
     <div class="ctright">
           <p>
             <a href="#" v-for="item in allword" :key="item.id" @click.prevent="check(item, $event)">
                      {{item}}
             </a>
           </p>
     </div>
        <h2> <router-link to="/home"><img src="../assets/img/cleft.png"></router-link>城市选择</h2>
        <div class="mainTab">
          <dl class="ctlist">
            <dt>当前定位城市</dt>
            <dd><a href="#">北京</a></dd>
          </dl>
          <dl class="ctlist">
            <dt>全部城市</dt>
            <dd><a href="#">全国</a></dd>
          </dl>
          <dl class="ctlist">
            <dt>历史浏览城市</dt>
            <dd><a href="#">北京</a></dd>
            <dd><a href="#">天津</a></dd>
          </dl>
          <dl class="ctlist">
            <dt>周边城市</dt>
            <dd><a href="#">天津</a></dd>
            <dd><a href="#">唐山</a></dd>
            <dd><a href="#">石家庄</a></dd>
          </dl>
          <dl class="ctlist" v-for="(item, index) in citylist" :key="item.id">
            <dt class="ind">{{index}}</dt>
            <dd><a href="#" v-for="n in item" :key="n.id">{{n.name}}</a></dd>
          </dl>
        </div>
  </div>
</template>
<script>
	export default{
     data(){
       return {
          allword:[
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'R', 'Y', 'Z'
          ],
          citylist:{}
       }
     },
     methods:{
        check: function (item, event){
          var box = document.querySelectorAll('.ind'), marTop;
          Object.keys(box).forEach(function (key, dex, arr) {
              if(box[key].innerText == item) {
                marTop = parseInt(box[key].offsetTop)-44;
              }
          })
          document.body.scrollTop = marTop ;
        }
    },
    created(){
      this.axios.get("./static/city.json").then((res)=>{
          this.citylist = res.data.citylist;
       })
     }
	}
</script>

<style  lang="css" scoped>
@import '../assets/css/city.css';
</style>
