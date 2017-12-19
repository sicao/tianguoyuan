// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import store from './vuex/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import logoSrc from './assets/img/guan_default.png'

// 全局注册
Vue.use(VueLazyload, {
  error: logoSrc,//这个是请求失败后显示的图片
  loading: logoSrc,//这个是加载的loading过渡效果
  try: 2 // 这个是加载图片数量
})



Vue.prototype.isShowFooter = true;
Vue.prototype.check = false;
Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper)

Vue.prototype.axios=axios

router.beforeEach(function(f, to, next){
	window.scrollTo(0, 0);
	if(f.name == "detail" || f.name == "login" || f.name == "personal" || f.name == "citybox"){
		Vue.prototype.isShowFooter = false


	}else{
		Vue.prototype.isShowFooter = true;

	}
	if( f.name == "mine"){

		Vue.prototype.check = true

	}else{

		Vue.prototype.check = false
	}

	next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueAwesomeSwiper,
  template: '<App/>',
  components: { App }
})
