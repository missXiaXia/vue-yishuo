<template>
    <div class="login" @keydown.enter="loginSubmitTest">
    <!-- <div class="login-text">
      一说管理平台
    </div> -->
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>
          欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
              <Input v-model="form.userName" placeholder="请输入用户名">
              <span slot="prepend">
                <Icon :size="16" type="person"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码">
              <span slot="prepend">
                <Icon :size="14" type="locked"></Icon>
              </span>
              </Input>
            </FormItem>
          
            <div class="code"> 
                <label for="">验证码</label>
                <input type="text" class="sradd" v-bind:class="{errorstyle:show_error}" id="key" value="" v-model="text"  style="color:#999;ime-mode:disabled;-webkit-ime-mode:inactive;" v-on:blur="textBlur"/>
                <span v-on:click="create_code" v-model="code" class="add phoKey">{{check_code}}</span>
                <div class="error error7"  v-if="show_error">请输入正确的验证码</div>
            </div>
          
            <FormItem>
              <!-- loginSubmit -->
              <Button @click="loginSubmitTest" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
        </div>
      </Card>
    </div>
    <div class="login-footer">Copyright@2014&nbsp;&nbsp;一说&nbsp;&nbsp;1shuo.com&nbsp;&nbsp;版权申明&nbsp;&nbsp;京ICP备09052857号-6</div>
  </div>
</template>

<script type="text/ecmascript-6">
import Cookies from "js-cookie";
import { mapMutations } from "vuex";
import { login } from "serviceApi/user/login";
//import canvasNest from "../../../../static/thirdLib/canvasAnimate/canvas-nest";

export default {
  data() {
    return {
      form: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      },
      login_type: 4, //登录类型
      nickname: "",
      avatar: "",
      reg_channel: "",
      check_code: "", //校验码
      text: "",
      code: "", //生成的校验码
      show_error: false //校验状态
    };
  },
  created() {
    $("canvas").show();
  },
  mounted() {
    this.create_code();
  },
  methods: {
    //生成code
    create_code() {
      function shuffle() {
        const arr = [
          "1",
          "r",
          "Q",
          "4",
          "S",
          "6",
          "w",
          "u",
          "D",
          "I",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "2",
          "s",
          "t",
          "8",
          "v",
          "7",
          "x",
          "y",
          "z",
          "A",
          "B",
          "C",
          "9",
          "E",
          "F",
          "G",
          "H",
          "0",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "3",
          "R",
          "5",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z"
        ];
        return arr.sort(function() {
          return Math.random() - 0.5;
        });
      }
      shuffle();

      var show_code = () => {
        let ar1 = "";
        let code = shuffle();
        for (let i = 0; i < 4; i++) {
          ar1 += code[i];
        }
        this.check_code = ar1;
      };
      show_code();
    },
    //验证校验码
    textBlur() {
      if (this.text == this.check_code.toLowerCase()) {
        this.show_error = false;
      } else {
        this.show_error = true;
        this.create_code();
      }
    },
    loginSubmitTest() {
      if (this.text == this.check_code.toLowerCase()) {
        $("canvas").hide();
        this.$router.push({ name: "home" });
      } else {
        this.show_error = true;
        this.create_code();
        this.text = "";
      }
    },
    loginSubmit() {
      login(
        this.login_type,
        this.username,
        this.password,
        this.nickname,
        this.avatar,
        this.reg_channel
      ).then(res => {
        if (res.code == 200) {
          Cookies.set("userName", this.form.userName);
          Cookies.set("password", this.form.password);
          Cookies.set("userId", res.data.user_id);
          this.setUserId(res.data.user_id);
          // console.log(res.data)
          this.$router.push("voiceList");
        } else {
          console.log("错误");
        }
      });
    },
    ...mapMutations({
      setUserId: "SET_USER_ID"
    })
  }
};
</script>

<style lang="sass" rel="stylesheet/sass" scoped>

.login
  position: absolute
  width: 100%
  height: 100%
  background: url("~@/assets/img/bg-4.jpg")
  background-size: cover
  background-position: center
  .login-text
    position: absolute
    color: #fff
    font-size: 70px
    top: 40%
    transform: translateY(-50%)
    left: 35%
    transform: translateX(-50%)
    Letter-spacing: 50px   
  .login-con
    position: absolute
    left: 67%  
    top: 50%
    transform: translateY(-60%)
    width: 300px
    z-index: 2
    .login-con-header
      font-size: 16px
      font-weight: 300
      text-align: center
      padding: 30px 0
    .form-con
      padding: 10px 0 0
      .code
        font-size: 12px
        margin-bottom: 24px
        .sradd
          width: 148px
          height: 30px
          text-indent: 8px
          font-size: 14px
          border: 1px solid #dddee1
          border-radius: 4px
        .errorstyle
          border: 1px solid #ed3f14
        .error
          color: #ed3f14
        .add
          float: right
          height: 30px
          text-align: center
          line-height: 30px
          width: 75px
          background: skyblue
          Letter-spacing: 5px
          bdradius: 4px
    .login-tip
      font-size: 10px
      text-align: center
      color: #c3c3c3
  .login-footer
    position: absolute
    color: #fff
    font-size: 14px
    bottom: 5%
    left: 50%
    transform: translateX(-50%)
</style>
