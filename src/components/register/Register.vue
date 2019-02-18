<template>
  <div class="forms">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机号码" prop="phoneNum">
        <el-input v-model="ruleForm2.phoneNum" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code" class="code" v-if="false">
        <el-input v-model="ruleForm2.code" placeholder="请输入验证码"></el-input>
        <el-button type="primary">获取验证码</el-button>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="请再输入密码" @keyup.enter.native="submitForm('ruleForm2')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')" plain>提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: 'Register',
  data () {
    var checkPhoneNum = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('手机号码不能为空'))
      }
      setTimeout(() => {
        if (!(/^1[34578]\d{9}$/.test(value))) {
          callback(new Error('请输入正确的11位手机号码'))
        } else {
          callback()
        }
      }, 500)
    }
    var checkCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        } else {
          if (!(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/.test(value))) {
            callback(new Error('密码必须包含数字加字母且不能包含特殊符号'))
          }
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        phoneNum: '',
        code: ''
      },
      rules2: {
        phoneNum: [
          {validator: checkPhoneNum, trigger: 'blur'}
        ],
        code: [
          {validator: checkCode, trigger: 'blur'}
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      let data = {
        pwd: this.ruleForm2.pass,
        phoneNum: this.ruleForm2.phoneNum
      }
      this.$http.post('/api/signUp',data).then((res) => {
        console.log(res)
        if(res.data.status == 1000){
          alert(res.data.message)
          this.$notify({
            title: '注册成功',
            message: '恭喜，成功注册可前往登录',
            type: 'success',
            duration: 2000
          })
          setTimeout(() => {
            this.$router.push('/login');
          }, 500)
        }else {
          alert(res.data.message)
        }
      }).catch((err)=>{
        console.log(err)
      })
//      this.$refs[formName].validate((valid) => {
//        if (valid) {
//          this.$notify({
//            title: '注册成功',
//            message: '恭喜，成功注册可前往登录',
//            type: 'success',
//            duration: 2000
//          })
//          setTimeout(() => {
//            this.$router.push('/login');
//          }, 500)
//        } else {
//          console.log('error submit!!')
//          return false
//        }
//      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less">
.code{
  position: relative;
  .el-input{
    display: inline-block;
    width: 200px;
  }
  .el-button{
    position: absolute;
    right: 0px;
    display: inline-block;
    width: 100px;
    height:40px;
    text-align: center;
  }
}
</style>
<style lang="less" scoped>
.forms{
  width: 400px;
  height: 500px;
  margin: 50px auto;
}
</style>
