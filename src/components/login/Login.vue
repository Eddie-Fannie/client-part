<template>
<div class="login">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
    <el-form-item label="邮箱/手机号码" prop="phoneNum">
      <el-input v-model="ruleForm.phoneNum" placeholder="请输入邮箱/手机号码"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input v-model="ruleForm.pwd" type="password" placeholder="请输入密码" @keyup.enter.native="submitForm('ruleForm')"></el-input>
    </el-form-item>
    <el-form-item label="记住登录" prop="delivery">
      <el-switch v-model="ruleForm.delivery"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    var checkPhoneNum = (rule, value, callback) => {
      let phoneMailExp = /^1[34578]\d{9}$||^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
      if (!phoneMailExp.test(value)) {
        callback(new Error('请输入正确的手机号码/邮箱账号'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        phoneNum: '',
        pwd: '',
        delivery: false
      },
      rules: {
        phoneNum: [
          { required: true, message: '请输入邮箱/手机号码', trigger: 'blur' },
          {validator: checkPhoneNum, trigger: 'blur'}
        ],
        pwd: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$notify({
            title: '登录成功',
            message: '登录成功，即将跳转',
            type: 'success',
            duration: 2000
          })
          setTimeout(() => {
            this.$router.push('/index')
          }, 500)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less">
.login{
  width: 400px;
  height: 500px;
  margin: 50px auto;
}
</style>
<style lang="less" scoped>
</style>
