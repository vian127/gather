<template>
  <div class="container">
    <div class="login-box">
      <div class="login-wrap" v-show="showLogin">
        <h3>登录</h3>
        <div class="input-group">
          <span class="input-group-addon glyphicon glyphicon-user"></span>
          <input type="text" v-model="username" class="form-control" name="username" placeholder="用户名" autofocus>
          <transition name="fade">
            <p v-show="showUser" transiton="fade">{{warn_user}}</p>
          </transition>
        </div>
        <div class="input-group">
          <span class="input-group-addon glyphicon glyphicon-lock"></span>
          <input type="password" v-model="password" class="form-control" name="password" placeholder="密码">
          <transition name="fade">
            <p v-show="showPass" transiton="fade">{{warn_pass}}</p>
          </transition>
        </div>
        <div class="input-group">
          <span class="input-group-addon glyphicon glyphicon-pencil"></span>
          <input type="text" class="form-control code-area"  name="" maxlength="5" placeholder="验证码" v-model="verify">
          <input type="button" id="checkCode" class="code" v-model="code" @click="createCode">
          <transition name="fade">
            <p v-show="showCode" transiton="fade">{{warn_code}}</p>
          </transition>
        </div>
        <button class="btn btn-primary btn-lg btn-block" type="button" @click="login">登录</button>
        <span v-on:click="ToRegister">没有账号？马上注册</span>
        
        <!-- <div>
                    <a href="">忘记密码</a>
                    <p class="pull-right">没有账号？<a href="">立即注册</a></p>
        </div>-->
      
      </div>
    </div>
  </div>
</template>

<style>
html,body {height: 100%;}
body {background: url("../../assets/images/login-bg.jpg") fixed center center;}
.login-box {z-index: 10;position: fixed;width: 560px;left: 50%;top: 20%;margin-left: -280px;background-color: rgba(0, 0, 0, 0.7);color: #fff;border-radius: 5px;}
.login-wrap {padding: 30px 60px 50px;}
.login-wrap > h3 {margin: 20px;}
.login-wrap .input-group {margin-bottom: 30px;}
.login-wrap .input-group-addon {top: 0px;}
.login-wrap .input-group > p {z-index: 10;position: absolute;left: 0px;top: 38px;color: #ee4e33;}
.login-wrap a {color: #fff;}
.login-wrap .code-area {width: 60%;}
.img-code {float: right;width: 30%;background-color: #111;height: 34px;line-height: 34px;}
.btn {margin-bottom: 10px;border:none;}
span{cursor:pointer;}
span:hover{color:#41b883;}
.fade-enter-active, .fade-leave-active {transition: opacity .5s linear;}
.fade-enter{opacity: 0}
.fade-enter-to{opacity: 1;}
.code {position: absolute;right: 0;top: 0;width: 80px;height: 100%;line-height: 30px;text-align: center;font-weight: bold;border: 0;outline: none;letter-spacing: 3px;background-color: rgba(0, 247, 255, 0.555);color: rgba(255, 0, 221, 0.527);z-index: 10;}
</style>

<script>
// 引入cookie
import funCookie from '../../assets/js/cookie.js';
export default {
  data() {
    return {
      showLogin: true,
      showRegister: false,
      showUser: false, 
      showPass: false,
      showCode: false,
      code:"",
      verify:"",
      warn_user: "",
      warn_pass: "",
      warn_code:"",
      username: "",
      password: "",
      newUsername: "",
      newPassword: "",
      is_next:true
    };
  },
  mounted() {
    this.createCode();
    if(funCookie.getCookie('username')){
      // this.$router.push('/home')
    }
  },
  methods: {
    login() {
      if(this.is_next){
        this.is_next=false;
        if(this.username == ""){
          this.showUser = true;
          this.warn_user= "用户名不能为空!";
          this.resetInfo();
          return 
        }else if(this.username.length<4){
          this.showUser = true;
          this.warn_user= "用户名至少四位数!";
          this.resetInfo();
          return 
        }else if(this.password == ''){
          this.showPass = true;
          this.warn_pass ="密码不能为空！";
          this.resetInfo();
          return 
        }else if(this.password.length<6){
          this.showPass = true;
          this.warn_pass ="密码长度至少为6位！";
          this.resetInfo();
          return 
        }else if(this.verify== ""){
          this.showCode = true;
          this.warn_code = "验证码不能为空！";
          this.resetInfo();
          return
        }else if(this.verify.toUpperCase()!=this.code){
          this.showCode = true;
          this.warn_code = "验证码不对！";
          this.resetInfo();
          this.createCode();
          this.verify = "";
          return
        }else{
          let arr = ['zhangsan','lisi','wangwu','malu','tianqi','admin'];  //假设数据库中用户名
          let pass = ['111333','222333','333444','444555','123456']; //假设密码库
          let hasName = arr.indexOf(this.username);
          let hasPass= pass.indexOf(this.password);
          if(hasName !=-1) {
            // funCookie.setCookie('username',this.username,1000*60);
            console.log('用户名正确')
          }else{
            this.showUser = true;
            this.warn_user = '用户名或密码不对！'
            this.resetInfo();
            return 
          }
          if(hasPass !=-1){
            // funCookie.setCookie('password',this.password,1000*60);
            // this.$router.push('./home');
            console.log('密码正确')
          }else{
            this.showPass = true;
            this.warn_pass = '用户名或密码错误！'
            this.resetInfo();
            return 
          }
          this.resetInfo();
        }
      }
    },
    ToRegister() {
     
    },
    createCode(){
      this.code ="";
      var codeLength = 5; //验证码的长度   
      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数   
      for (var i = 0; i < codeLength; i++) { 
        var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引   
        this.code += random[charIndex]; //根据索引取得随机数加到code上  
      }
      this.verify="";
    },
    resetInfo(){
      setTimeout(() => {
        this.showUser = false;
        this.showPass = false;
        this.showCode = false;
        this.warn_pass = "";
        this.warn_user="";
        this.warn_code="";
        this.is_next =true;
      }, 2000);
    }
  }
};
</script>