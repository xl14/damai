<template>
  <div class="OrderMenu">
    <div class="linear-gradient">我的大麦>交易中心>订单管理</div>
    <div class="OrdeList">
      <div>近期订单列表</div>
    </div>
    <div>
      <Dropdown style="margin-bottom: 2%">
        <Button>
          全部订单
          <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem disabled>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown style="margin-left: 20px">
        <Button>
          全部
          <Icon type="ios-arrow-down"></Icon>
        </Button>
        <DropdownMenu slot="list">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem disabled>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Input placeholder="请输入订单编号、商品名称" class="inquireAbout"/>
      <Button>查询</Button>
      <Table border ref="selection" :columns="columns4" :data="data1" style="margin-bottom: 2%"></Table>
      <Button @click="handleSelectAll(true)" style="margin-bottom: 2%">全选</Button>
      <Button @click="handleSelectAll(false)" style="margin-bottom: 2%">取消全选</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name:"OrderMenu",
    data () {
      return {
        columns4: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '订单编号',
            width:150,
            key: 'identifier'
          },
          {
            title: '购买时间',
            key: 'date'
          },
          {
            title: '商品名称',
            key: 'name'
          },
          {
            title: '数量',
            key: 'number'
          },
          {
            title: '单价',
            key: 'unitPrice'
          },
          {
            title: '订单金额',
            key: 'money'
          },
          {
            title: '交易状态',
            key: 'tradingStatus'
          },
          {
            title: '操作',
            key: 'operation'
          }
        ],
        data1: [
          {
            identifier: '12363575452',
            number: 18,
            name: '西红柿首富',
            date: '2016-10-03',
            unitPrice: '100',
            money: '100',
            tradingStatus:'已支付'
          },
          {
            identifier: '13548874714',
            number: 24,
            name: '一出好戏',
            date: '2016-10-01',
            unitPrice: '100',
            money: '100',
            tradingStatus:'已支付'
          },
          {
            identifier: '86544534541',
            number: 30,
            name: '泰囧',
            date: '2016-10-02',
            unitPrice: '100',
            money: '100',
            tradingStatus:'已支付'
          },
          {
            identifier: '47257542452',
            number: 26,
            name: '帕丁顿熊2',
            date: '2016-10-04',
            unitPrice: '100',
            money: '100',
            tradingStatus:'已支付'
          }
        ]
      }
    },
    methods: {
      handleSelectAll (status) {
        this.$refs.selection.selectAll(status);
      }
    }
  }
</script>

<style>
  .OrderMenu>.linear-gradient{
    border:1px solid #F0F0F0;
    line-height:40px;
    text-indent:20px;
  }
  .OrdeList{
    width:100%;
    height:60px;
    position:relative;
    border-bottom:1px solid #E3E3E3;
    margin-bottom: 2%;
  }
  .OrdeList div{
    width: 100px;
    line-height: 30px;
    position:absolute;
    border-bottom:1px solid red;
    margin-top: 29px;
    text-align: center;
    color: red;
  }
  .OrderMenu .inquireAbout{
    width: 50%;
    margin-left: 22%;
  }
</style>
