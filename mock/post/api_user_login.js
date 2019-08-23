/**
 * 登录接口
 * Created by Administrator on 2018/8/13.
 */
module.exports = function(req){
    let success = 0;//0 成功   1 失败
    let errorCode = "00000";
    let msg = "登录成功";
    let user = {
        name: "王宝强",
        age: 18,
        sex: "男"
    }


    //if(req.body){
    //    success = req.body.username;
    //}

    if(req.body.username === "admin" && req.body.password == "1234567"){//失败
        success = 1;
        errorCode = "00001";
        msg = "登录失败";
        user = {};
    }

    return {
        success,
        errorCode,
        msg,
        user
    }
}
