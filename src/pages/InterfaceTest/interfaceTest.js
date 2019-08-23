export var InterfaceObj = {
	
	interfaces : [
		{interfaceName:"登录接口",interfaceUrl:"api/user/login",requestData:{username:"王宝强",password:"abc123"},method:"GET"},
		{interfaceName:"注册接口",interfaceUrl:"api/user/register",requestData:{
			phone:"18607115300",password:"123456",msgCode:"0789"
		},method:"GET"},
		/** 首页接口  **/
		{interfaceName:"今日推荐",interfaceUrl:"api/info/todayGroom",requestData:{},method:"GET"},
		{interfaceName:"即将开售",interfaceUrl:"api/info/todayGroom",requestData:{},method:"GET"},
		{interfaceName:"戏剧达人",interfaceUrl:"api/info/scenario",requestData:{},method:"GET"},
		{interfaceName:"体育赛事",interfaceUrl:"api/info/scenario",requestData:{},method:"GET"},
		{interfaceName:"舞蹈古典",interfaceUrl:"api/info/scenario",requestData:{},method:"GET"},
		{interfaceName:"儿童亲子",interfaceUrl:"api/info/scenario",requestData:{},method:"GET"},
		{interfaceName:"摇滚在路上",interfaceUrl:"api/info/scenario",requestData:{},method:"GET"},
		/** 戏剧页面接口 **/
		{interfaceName:"猜你喜欢",interfaceUrl:"api/info/guassYouLive",requestData:{},methods:"GET"},
		{interfaceName:"精彩聚集",interfaceUrl:"api/info/wonderful",requestData:{},method:"GET"}
	]
	
}
