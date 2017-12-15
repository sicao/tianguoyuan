<template>

	<div class="home">
 		<div class="header fixed">
            <div class="position">
                <div class="arri-time">
                    <img src="../assets/img/ci_20171025_1.png" alt="">
                </div>
                <a href="###">
                    <div class="map">
                    <router-link to="/citybox" :style="{color:'#65a032'}">
                        回龙观街道
                    </router-link>
                    </div>

                </a>
                <div class="tu">
                    <img src="../assets/img/tu.jpg" alt="">
                </div>
            </div>
            <div class="jing">
                <a href="###"><img src="../assets/img/jing.png" alt=""></a>
            </div>
        </div>
		<div class="main" v-if="gan.length>0">
        <div class="lun">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide>
                    <img class="side" src="https://imgjd4.fruitday.com/images/2017-11-15/34bba84f71fd22d55a0c8434f386b86d.png">
                </swiper-slide>
                 <swiper-slide>
                    <img class="side" src="https://imgjd1.fruitday.com/images/2017-11-08/9f554c2db83902b726570a41307299fe.jpg">
                </swiper-slide>
                 <swiper-slide>
                    <img class="side" src="https://imgjd5.fruitday.com/images/2017-11-16/096549a428561579a22bf9605a319ee4.jpg">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            </swiper>
        </div>
            <div class="item">
                <img src="../assets/img/9a80964bf0201b57e8e9a4a382205fd7.png" alt="">
            </div>
            <div class="section">
                <img src="../assets/img/78a4fdf1246b0995bdc304d05358227d.gif" alt="">
            </div>
            <div class="item-0-4">
                <div class="">
                    <img src="../assets/img/9bcabe7f5199d4ef6b31246682f2a2cc.jpg" alt="">
                </div>
                <div class="">
                    <img src="../assets/img/c11e2b34464df2b88cf57d1b0a034d46.jpg" alt="">
                </div>
            </div>
            <div class="item-0-5">
                <img src="../assets/img/d5acc6bedd3e3fd9b799e5925530c80e.jpg" alt="">
            </div>
            <div class="bai">

            </div>
            <div class="item-0-3">
                <img src="../assets/img/d5a7a60273915c0bba2909a503250e70.jpg" alt="">
            </div>
            
            <div class="item-0-6" v-for="item in gan"  @click="checked(item)">
            <router-link to="/detail">
                <div class="img-box">
                    <img :src="item.image" alt="">
                </div>
            </router-link>
                <div class="desc" >
                    <h5>{{item.title}}</h5>
                    <p>{{item.subtitle}}</p>
                    <p class="pt">￥{{item.price}}/ <span>{{item.volume}}</span><img @click.stop="add(item)" src="../assets/img/jia.jpg" alt=""></p>
                </div>
            </div>
            

            <div class="pan">
                <div class="pans">
                    <div class="" v-for="item in fruitList1"  @click="checked(item)">
                    <router-link to="/detail">
                        <img :src="item.image" alt="">
                    </router-link>
                        <p class="yun">{{item.title}}</p>
                        <p class="shi">￥{{item.price}}/<span>{{item.volume}}</span><img @click.stop="add(item)" src="../assets/img/jia.jpg" alt=""></p>
                    </div>
                                    
                </div>
            </div>
            <div class="bai">

            </div>
            <div class="item-0-3">
                <img src="../assets/img/bd068b464ae2bc65a16920b0cd5d06d7.jpg" alt="">
            </div>
            
            <div class="item-0-6" v-for="item in cheng"  @click="checked(item)">
            <router-link to="/detail">
                <div class="img-box">
                    <img :src="item.image" alt="">
                </div>
            </router-link>
                <div class="desc" >
                    <h5>{{item.title}}</h5>
                    <p>{{item.subtitle}}</p>
                    <span class="tag">新品</span>
                    <p class="pt ping">￥{{item.price}} / <span>{{item.volume}}</span><img @click.stop="add(item)" src="../assets/img/jia.jpg" alt=""></p>
                </div>
            </div>
           

            <div class="pan">
            
                <div class="pans" id="pans2">
                
                    <div class="" v-for="item in fruitList2"  @click="checked(item)">
                    <router-link to="/detail">
                        <img :src="item.image" alt="">
                    </router-link>
                        <p class="yun">{{item.title}}</p>
                        <p class="shi">￥{{item.price}}/<span>{{item.volume}}</span><img @click.stop="add(item)" src="../assets/img/jia.jpg" alt=""></p>
                    </div> 
                 
                </div>
           
            </div>
            <div class="bai">

            </div>
            <div class="santu">
                <div class="santuzuo">
                    <img src="../assets/img/4d9a2da7b047ee78877907ebbbb4bbdb.jpg" alt="">
                </div>
                <div class="santuyou">
                    <div class="santuyoushang">
                        <img src="../assets/img/93c08a50614cc86a533a8557585a9007.jpg" alt="">
                    </div>
                    <div class="santuyouxia">
                        <img src="../assets/img/8215bad03f7640024cd26a4a6f4c563f.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="item-0-12">
                <img src="../assets/img/4b0ff4faf5c306f2b587f6826493638d.gif" alt="">
            </div>
            <div class="bai">

            </div>
            <div class="item-0-13">
                <img src="../assets/img/a6378866c0a4ed604b88a636ab0b95a9.gif" alt="">
            </div>
            <div class="bai">

            </div>
            <div class="santu">
                <div class="santuzuo">
                    <img src="../assets/img/9660d07715fa9eb2949ea2ef11b927eb.jpg" alt="">
                </div>
                <div class="santuyou">
                    <div class="santuyoushang">
                        <img src="../assets/img/59e6a71280b833ca91364105ef7954af.jpg" alt="">
                    </div>
                    <div class="santuyouxia">
                        <img src="../assets/img/ad5fe9fe4b715ecbffc0efb63b4c8540.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="item-0-3">
                <img src="../assets/img/2487a6d1b132984d9f4ba9437d861206.jpg" alt="">
            </div>
            <div class="kong">
                <img src="../assets/img/9b5771d6e66986b73662bca0c0cff69c.jpg" alt="">
            </div>

            <div class="pan">
           
                <div class="pans">
                 
                    <div class="" v-for="item in fruitList3"  @click="checked(item)">
                    <router-link to="/detail">
                        <img :src="item.image" alt="">
                    </router-link> 
                        <p class="yun">{{item.title}}</p>
                        <p class="shi">￥{{item.price}}/<span>{{item.volume}}</span><img @click.stop="add(item)" src="../assets/img/jia.jpg" alt=""></p>
                    </div>
                
                </div>
            </router-link>
            </div>

            <div class="kong">
                <img src="../assets/img/4e2c25aece3904f754926191c1320ca2.jpg" alt="">
            </div>

            <div class="pan">
            <router-link to="/detail">
                <div class="pans">               
                   <div class="" v-for="item in fruitList4"  @click="checked(item)">
                    <router-link to="/detail">
                        <img :src="item.image" alt="">
                    </router-link> 
                        <p class="yun">{{item.title}}</p>
                        <p class="shi">￥{{item.price}}/<span>{{item.volume}}</span><img @click.stop="add(item)" src="../assets/img/jia.jpg" alt=""></p>
                    </div>                
                </div>
            </router-link>
            </div>
            <div class="pan">
            
                <div class="pans">
                
                    <div class="" v-for="item in rouleiList"  @click="checked(item)">
                    <router-link to="/detail">
                        <img :src="item.image" alt="">
                    </router-link>
                        <p class="yun">{{item.title}}</p>
                        <p class="shi">￥{{item.price}}/<span>{{item.volume}}</span><img @click.stop="add(item)" src="../assets/img/jia.jpg" alt=""></p>
                    </div> 
                
                </div>
           
            </div>
            <div class="kong">
                <img src="../assets/img/c5467e16c05b0a225af66f9054e1fe2e.jpg" alt="">
            </div>

            <div class="pan">
            
                <div class="pans">
                
                     <div class="" v-for="item in shucaiList" @click="checked(item)">
                        <router-link to="/detail">
                        <img :src="item.image" alt="">
                        <p class="yun">{{item.title}}</p>
                        </router-link>
                        <p class="shi">￥{{item.price}}/<span>{{item.volume}}</span><img @click.stop="add(item)" src="../assets/img/jia.jpg" alt=""></p>
                    </div>
                 
                </div>
          
            </div>
            <div class="item-0-3">
                <img src="../assets/img/32743ce3f1138d565faf77093073117e.jpg" alt="">
            </div>
           
            <div class="item-0-6" v-for="item in bottomList" @click="checked(item)">
                <router-link to="/detail"  >
                <div class="img-box">
                    <img :src="item.image" alt="">
                </div>
                </router-link> 
                
                <div class="desc">
                    <h5>{{item.title}}</h5>
                    <p>{{item.subtitle}}</p>
                    <p class="pt ping">￥{{item.price}} / <span>{{item.volume}}</span><img @click.stop="add(item)" src="../assets/img/jia.jpg" alt=""></p>
                </div>
                
            </div> 

        </div>
    </div>
</template>
<script>

    export default{
       
        data(){
            return {
                flags:"",
                cheng:[],
                gan:[],
                orderList:[],
                fruitList1:[],
                fruitList2:[],
                fruitList3:[],
                fruitList4:[],
                shucaiList:[],
                rouleiList:[],
                bottomList:[],
                swiperOption: {
                    initialSlide:0,//设定初始化时slide的索引
                    direction:'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
                    loop: false,  //无限滚动
                    speed:300,//滑动速度
                    autoplay:1000,//自动切换的时间间隔
                    onSlideChangeEnd: swiper => { //滑动之后回调函数
                        //切换结束时，告诉我现在是第几个slide
                        // console.log('onSlideChangeEnd', swiper.realIndex)
                    }               
                }   
            }
        },
    
        created(){
            var _t=this;
            this.axios.all([this.get1(),this.get2()]).then(this.axios.spread(function(res1,res2){
            _t.cheng=res1.data.cheng;
            _t.gan=res1.data.gan;
            _t.fruitList1=res1.data.fruit1;
            _t.fruitList2=res1.data.fruit2;
            _t.fruitList3=res1.data.fruit3;
            _t.fruitList4=res1.data.fruit4;
            _t.shucaiList=res1.data.shucai;
            _t.rouleiList=res1.data.roulei;
            _t.bottomList=res2.data.content;            
            }))
        },
        methods:{
            add(item){
                this.$store.dispatch("addOrder", item);
            },
            checked(item){
                this.$store.dispatch("addPro", item);
            },
            get1:function(){
            return this.axios.get("../static/data.json");
            },
            get2:function(){
            return this.axios.get("../static/bottom.json");
            }
        }
    }
</script>
<style scoped>
/*.side{
    width: 100%
}*/



    @import '../assets/css/index.css'
</style>