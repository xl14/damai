<template>
    <div class="AddPurchaser">
      <div class="AddPurchaserTitle">
        <div>新增购票人信息</div>
      </div>
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="formCustom.tel" placeholder="请填写姓名">
          </Input>
        </FormItem>
        <FormItem label="证件类型" prop="IDtype">
          <Select v-model="formCustom.IDtype" placeholder="身份证">
            <Option value="身份证">身份证</Option>
            <Option value="护照">护照</Option>
            <Option value="港澳台通行证">港澳台通行证</Option>
            <Option value="台胞证">台胞证</Option>
          </Select>
        </FormItem>
        <FormItem label="证件号码" prop="IDnumber">
          <Input type="text" v-model="formCustom.IDnumber" placeholder="请填写证件号">
          </Input>
        </FormItem>
        <FormItem>
          <Button type="error" @click="handleSubmit('formCustom')" class="preservationBtn">保存</Button>
          <Button class="cancelBtn">取消</Button>
        </FormItem>
        <span class="AddPurchaserSpan">有芝麻信用提供验证</span>
      </Form>
    </div>
</template>

<script>
    export default {
        name: "AddPurchaser",
      data () {
        return {
          formCustom: {
            name: '',
            IDnumber: '',
            IDtype: '',
          },
          ruleCustom: {
            name: [
              { required: true, message: '2-16个字符，可由中英文、数字组成', trigger: 'blur' }
            ],
            IDnumber: [
              { required: true, message: '请输入正确的证件号', trigger: 'blur'  }
            ],
          },
      methods: {
        handleSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('Success!');
            } else {
              this.$Message.error('Fail!');
            }
          })
        }
          }
        }
      }
    }
</script>

<style scoped>
  .AddPurchaser{
    width: 100%;
    border:1px solid #E3E4E6;
  }
  .AddPurchaserTitle{
    width:100%;
    height:40px;
    position:relative;
    border-bottom:2px solid #E3E3E3;
    margin-bottom: 2%;
  }
  .AddPurchaserTitle div{
    width: 100px;
    line-height: 30px;
    position:absolute;
    border-bottom:2px solid red;
    margin-top: 8px;
    text-align: center;
    color: red;
  }
  .AddPurchaser Form{
    margin: 5% 60% 5% 5%;
  }
  .AddPurchaserSpan{
    margin-left: 25%;
  }
  .AddPurchaser Button{
    width:115px;
  }
  .cancelBtn{margin-left: 2%;}
</style>
