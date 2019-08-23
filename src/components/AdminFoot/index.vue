<template>
  <div class="AdminFoot">
    <div class="AdminFootTop">
        <ul>
            <li>订购方式</li>
            <li>配送方式</li>
            <li>支付方式</li>
            <li>大麦网微信</li>
            <li>大麦网触屏版</li>
            <li>账户安全</li>
            <li>配送方式</li>
            <li>特色服务</li>
        </ul>
        <div>
            <ul>
              <li>在线订购</li>
              <li>电话订购</li>
              <li>上门订购</li>
              <li>大客户团体订购</li>
              <li>大麦超级票订购</li>
            </ul>
            <ul>
              <li>送货上门</li>
              <li>电子票</li>
              <li>上门自取</li>
              <li>大麦自助机换票</li>
            </ul>
            <ul>
              <li>在线支付</li>
              <li>柜台付款</li>
            </ul>
            <ul>
              <li>
                <img src="./img/160037.jpg" width="70px"/>
              </li>
            </ul>
            <ul>
              <li>
                <img src="./img/TB1r0uFxHSYBuNjSspiXXXNzpXa-280-280.png" width="70px"/>
              </li>
            </ul>
            <ul>
              <li>找回密码</li>
              <li>账户注册</li>
              <li>账户绑定</li>
              <li>SSL安全证书</li>
            </ul>
            <ul>
              <li>退换及缺货说明</li>
              <li>发票帮助</li>
              <li>订单服务条款</li>
            </ul>
            <ul>
              <li>演出订阅</li>
            </ul>
        </div>
    </div>
    <div class="AdminFootBot">
      <ul>
        <li>公司介绍</li>|
        <li>品牌识别</li>|
        <li>企业荣誉</li>|
        <li>隐私声明</li>|
        <li>联系及合作</li>|
        <li>招聘信息</li>|
        <li>网站地图</li>|
        <li>友情链接</li>|
        <li>公司大事记</li>
      </ul>
      <ul>
        <li>
          <img src="./img/piao.png"/>
        </li>
        <li>
          <img src="./img/TB1ZO80pyOYBuNjSsD4XXbSkFXa-141-41.png"/>
        </li>
        <li>
          <img src="./img/TB1gw_ZxNWYBuNjy1zkXXXGGpXa-131-32.gif" />
        </li>
        <li>
          <img src="./img/TB1Y580pyOYBuNjSsD4XXbSkFXa-83-50.png" />
        </li>
        <li>
          <img src="./img/TB1pM_ZxNWYBuNjy1zkXXXGGpXa-114-40.png"/>
        </li>
        <li>
          <img src="./img/chengxin.png"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .AdminFoot{
    background:#E6E6E6;
    padding: 2% 0;
  }
  .AdminFoot>div{
    width: 1160px;
  }
  .AdminFoot>div,.AdminFootBot>ul{
    margin:0 auto;
  }
  .AdminFootTop>div,.AdminFootBot>ul{
    padding: 1% 0;
  }
  .AdminFootTop>ul,.AdminFootTop>div,.AdminFootBot>ul{
    display: flex;
  }
  .AdminFootTop>ul li,.AdminFootTop>div ul,.AdminFootBot>ul:nth-child(1) li{
    flex:1;
  }
  .AdminFootBot>ul{
    width:70%;
    text-align: center;
  }
  .AdminFootBot>ul:nth-child(2)>li:nth-child(1){
    margin-left: 3%;
  }
  .AdminFootBot>ul:nth-child(2) li{
    margin-left: 1%;
  }
  .AdminFootBot{
    border-top:2px solid red;
  }
</style>
