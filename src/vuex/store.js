import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		tabData:[
				{name:"戏剧",isShow:false,toUrl:"xijv"},
				{name:"体育",isShow:false,toUrl:"xijv"},
				{name:"亲子",isShow:false,toUrl:"qinzi"},
				{name:"舞蹈古典",isShow:false,toUrl:"xijv"},
				{name:"摇滚",isShow:false,toUrl:"xijv"}
			]
	}
})

export default store;
