<template>
  <div class="register">
      <Head-register />
      <div class="registerCont">
          <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
              <FormItem prop="tel">
                  <Input type="text" v-model="formCustom.tel" placeholder="请输入手机号">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="passwd">
                  <Input type="password" v-model="formCustom.passwd" placeholder="请输入登录密码">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="passwdCheck">
                  <Input type="password" v-model="formCustom.passwdCheck" placeholder="请确认登录密码">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="SMS">
                  <row>
                      <Col span="16">
                          <Input type="text" v-model="formCustom.SMS" placeholder="请输入验证码">
                              <Icon type="logo-twitch"  slot="prepend"/>
                          </Input>
                      </Col>
                      <Col span="4" class="intifyingCode">
                          <Button>获取验证码</Button>
                      </Col>
                  </row>
              </FormItem>
              <FormItem prop="interest">
                  <CheckboxGroup v-model="formCustom.interest">
                      <Checkbox>
                        <span>我已阅读并同意</span>
                        <a href="#">《会员协议》</a>
                        <span>和</span>
                        <a href="#">《隐私权条款》</a>
                      </Checkbox>
                  </CheckboxGroup>
              </FormItem>
              <FormItem>
                  <Button type="primary" @click="handleSubmit('formCustom')" class="registerBtn">注册</Button>
              </FormItem>
          </Form>
      </div>
      <Foot-web/>
  </div>
</template>

<script>
    import HeadRegister from "@/components/HeadSimper/HeadRegister"
    import FootWeb from "@/components/FootWeb"
    export default {
        name: "index",
      data () {
        const validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请设置你的登录密码'));
          } else {
            if (this.formCustom.passwdCheck !== '') {
              // 对第二个密码框单独验证
              this.$refs.formCustom.validateField('passwdCheck');
            }
            callback();
          }
        };
        const validatePassCheck = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入登录密码'));
          } else if (value !== this.formCustom.passwd) {
            callback(new Error('The two input passwords do not match!'));
          } else {
            callback();
          }
        };

        return {
          formCustom: {
            tel: '',
            passwd: '',
            passwdCheck: '',
            interest:[],
            SMS:''

          },
          ruleCustom: {
            tel:[
              { required: true, message: '请输入正确的手机号', trigger: 'blur' },
              { type: 'string', pattern:'[0-9]{11}',message: '手机号码必须是11位数字', trigger: 'blur' }
              ],
            passwd: [
              { required: true, validator: validatePass, trigger: 'blur' }
            ],
            passwdCheck: [
              { required: true, validator: validatePassCheck, trigger: 'blur' }
            ],
            interest:[
              { required: true, type: 'array', min: 1, message: '请先同意协议之后才能注册', trigger: 'change' }
            ],
            SMS:[
              { required: true, message: '验证码错误', trigger: 'blur' },
              { type: 'string', pattern:'[0-9]{6}',message: '验证码为6位数字', trigger: 'blur' }
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
      },
      components:{
        HeadRegister,
        FootWeb
      }
    }
</script>

<style scoped>
  .register{background:#e2dede;}
  .registerCont{
    width:90%;
    background:#FFF;
  }
  .registerCont>Form{
    width:40%;
    padding:4%;
  }
  .registerCont,.registerCont>Form{margin:5% auto;}
  .registerBtn{
    width:100%;
    background:#FF1971;
    border:none;
    line-height:35px;
    font-size:18px;
  }
  .intifyingCode{margin-left:3%;}
</style>
