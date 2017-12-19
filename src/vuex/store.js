import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*
	state 用于存储数据项
	mutations 单线程同步代码用于操作state
	actions 用于响应状态变化 不能操作state 而跟mutations区别在于可以存在异步代码
	getters 用于获取数据的接口
*/

export default  new Vuex.Store({
	state: {
		orderList:[],
		proList:[],
		isshowlogin:false

	},
	mutations: {
		add_order(state, item){
			var flag = false;
			state.orderList.forEach(function(n, index, arr){
				if(n.title === item.title){
					flag = true;
					arr[index] = item;
					arr[index].in_stock++;
				}
			});

			if(!flag){
				state.orderList.push(item);
			}
		},
		minus_order(state,item){
			state.orderList.forEach(function(n, index, arr){
				if(n.title === item.title){
					state.orderList.splice(index,1)
				}
			});
		},
		add_pro(state,item){
			state.proList.splice(0,1,item)
		}
	},
	actions: {
		addOrder({commit}, item){
			commit("add_order", item);
		},
		minusOrder({commit},item){
			commit("minus_order", item);
		},
		addPro({commit},item){
			commit("add_pro", item);
		}
	},
	getters: {
		getOrderList: function(state){
			return state.orderList
		},
		getProlist:function(state){
			return state.proList
		}
	}
});
