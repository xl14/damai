/**
 * 用户注册接口
 * created by Mr.xu on 2018/9/4 
 */

module.exports = function(req){
	let success = 0;// 0 成功   1失败
	let errorCode = "00000";//失败代码
	let msg = "注册成功";//提示信息
	
	if(req.username == "abc"){
		let success = 1;
		let errorCode = "00001";
		let msg = "注册失败";
	}
	
	return {
		success,
		errorCode,
		msg
	}
}
