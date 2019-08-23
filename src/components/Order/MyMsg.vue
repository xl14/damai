<template>
  <div class="MyMsg">
    <div class="linear-gradient">我的大麦>交易中心>个人信息</div>
    <div class="login_cont_form">
      <Tabs type="card">
        <TabPane label="基本资料">
          <div class="Tips">
            <span>完善更多个人信息，有助于我们为您提供更加个性化的服务，大麦网将尊重并保护您的隐私。</span>
          </div>
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="昵称" prop="nickname">
              <Input v-model="formValidate.nickname" placeholder=""></Input>
            </FormItem>
            <FormItem label="联系电话" prop="user">
              <Input type="text" v-model="formValidate.user" placeholder="请输入手机号"></Input>
            </FormItem>
            <FormItem label="真实姓名" prop="realname">
              <Input v-model="formValidate.realname"></Input>
            </FormItem>
            <FormItem label="出生日期" prop="date" class="date">
                  <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
            </FormItem>
            <FormItem label="身份证号" prop="IDnumber">
              <Input type="text" v-model="formValidate.IDnumber" placeholder="请输入手机号"></Input>
            </FormItem>
            <FormItem label="性别">
              <RadioGroup v-model="sex">
                <Radio label="男"></Radio>
                <Radio label="女"></Radio>
              </RadioGroup>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="头像设置">
          <div class="crop">
            <div class="dm-crop">
              <div class="dm-crop-main">
                <canvas class="dm-crop-canvas" width="470" height="355"></canvas>
                <div class="dm-crop-upload">
                  <div class="dm-crop-picker">
                    <div class="dm-crop-picker__text">请选择一张照片</div>
                    <a class="dm-crop-btn dm-crop-btn__upload" href="javascript:;">
                      选择照片
                      <input type="file" />
                    </a>
                  </div>
                  <div class="dm-crop-mask"></div>
                </div>
              </div>
              <div class="dm-crop-side">
                <div class="dm-crop-row">
                  <div class="dm-crop-preview__text">头像预览 (150 * 150)</div>
                </div>

                <div class="dm-crop-row">
                  <div class="dm-crop-preview">
                    <img class="dm-crop-preview__image" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" >
                  </div>
                </div>

                <div class="dm-crop-row">
                  <a class="dm-crop-btn dm-crop-btn__upload" href="javascript:;">
                    选择照片
                    <input type="file" name="headImg"/>
                  </a>
                  <div class="dm-crop-text">支持JPG、PNG</div>
                </div>
                <div class="dm-crop-row">
                  <a class="dm-crop-btn dm-crop-btn__save" href="javascript:;">保存</a>
                </div>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyMsg",
    data () {
      return {
        sex: '男',
        formValidate: {
          nickname: '',
          user: '',
          realname:'',
          date: '',
          IDnumber:'',
          sex:''
        },
        ruleValidate: {
          nickname: [
            { required: true, message: '2-16个字符，可由中英文、数字组成', trigger: 'blur' }
          ],
          user: [
            { required: true, message: '请输入正确的手机号', trigger: 'blur'  }
          ],
          realname:[
            {required: true, message: '2-10个汉字或4-20个英文字母', trigger: 'blur'}
          ],
          date: [
            { required: true, type: 'date', message: 'Please select the date', }
          ],
          IDnumber:[
            { required: true, message: '请填写正确的身份证号码', trigger: 'blur'  }
          ]
        }
      }
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

</script>

<style>
  .MyMsg>.linear-gradient{
    border:1px solid #F0F0F0;
    line-height:40px;
    text-indent:20px;
  }
  .Tips{
    width:95%;
    margin: 0 auto;
    line-height: 40px;
    text-indent: 20px;
    background: #FFFDEE;
    border:1px solid #EDD28B;
  }
  .login_cont_form Form{
    margin-top: 1%;
    margin-left:2%;
  }
  .login_cont_form Form Input{
    width:23%;
  }
  .login_cont_form .date Input{width:100%;}
  .MyMsg>.login_cont_form{
    margin-top:2%;
    height:450px;
  }
  .crop {
    overflow: hidden;
  }

  .dm-crop {
    zoom: 1;
    margin: 20px;
    position: relative;
    overflow: hidden;
  }

  .dm-crop:after {
    content: '';
    display: block;
    clear: both;
  }

  .dm-crop .dm-crop-btn {
    background-color: #e51b46;
    color: #fff;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    text-decoration: none;
    display: inline-block;
    border-radius: 5px;
    box-sizing: border-box;
    -webkit-transition: .3s all ease;
  }

  .dm-crop .dm-crop-btn:hover {
    color: #fff;
    background-color: #f42155;
  }

  .dm-crop .dm-crop-text {
    font-size: 12px;
    color: #666;
  }

  .dm-crop .dm-crop-main {
    position: relative;
    float: left;
    border: 1px solid #E2E2E2;
  }

  .dm-crop .dm-crop-side {
    float: left;
    padding-left: 50px;
  }

  .dm-crop .dm-crop-canvas {
    display: block;
  }

  .dm-crop .dm-crop-canvas_move {
    cursor: move;
  }

  .dm-crop .dm-crop-canvas_hover {
    cursor: pointer;
  }

  .dm-crop .dm-crop-canvas_resize-nw {
    cursor: nw-resize;
  }

  .dm-crop .dm-crop-canvas_resize-ne {
    cursor: ne-resize;
  }

  .dm-crop .dm-crop-canvas_resize-se {
    cursor: se-resize;
  }

  .dm-crop .dm-crop-canvas_resize-sw {
    cursor: sw-resize;
  }

  .dm-crop .dm-crop-upload {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .dm-crop .dm-crop-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #000;
    opacity: .5;
    filter: alpha(opacity=50);
  }

  .dm-crop .dm-crop-picker {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    width: 150px;
    height: 100px;
    margin-top: -50px;
    margin-left: -75px;
    border-radius: 5px;
    background-color: #fff;
  }

  .dm-crop .dm-crop-btn__upload {
    position: relative;
    overflow: hidden;
  }

  .dm-crop .dm-crop-btn__upload:hover {
    color: #fff;
  }

  .dm-crop .dm-crop-btn__upload input {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
  }

  .dm-crop .dm-crop-picker__text {
    padding: 20px;
    text-align: center;
    font-size: 12px;
  }

  .dm-crop .dm-crop-btn {
    display: block;
    width: 100px;
    margin: 0 auto;
  }

  .dm-crop .dm-crop-preview {
    width: 150px;
    height: 150px;
    border: 1px solid #E2E2E2;
  }

  .dm-crop .dm-crop-preview__image {
    display: block;
    width: 150px;
    height: 150px;
  }

  .dm-crop .dm-crop-side .dm-crop-row {
    text-align: center;
    padding-bottom: 20px;
  }

  .dm-crop .dm-crop-preview__text {
    font-size: 14px;
    color: #333;
  }

  .dm-crop .dm-crop-upload_hide {
    display: none;
  }
</style>
