<template>
  <div class="addMember ivu-modal-wrap" v-show="showFlag">
    <div class="addMember-modal">
      <div class="formInput title">
        添加用户
      </div>


      <div class="formInput userId">
          <label for="inputUserId">用户ID<span class="red">*</span></label>
          <Input id="inputUserId" v-model="inputUserId" type="text" placeholder="请输入用户ID" style="width: 300px"></Input>
      </div>


      <div class="formInput nickName">
                <label for="inputNickName">用户昵称
                    <span class="red">*</span>
                </label>
                <Input id="inputNickName" v-model="inputNickName" type="text" placeholder="请输入用户昵称" style="width: 300px"></Input>
            </div>

      <div class="formInput email">
        <label for="inputEmail">邮箱
          <span class="red">*</span>
        </label>
        <Input id="inputEmail" v-model="inputEmail" placeholder="请输入邮箱" style="width: 300px"></Input><span style="font-size:12px;margin-left:5px" v-if="emailFlag" class="red">邮箱错误</span>
      </div>

 <div class="formInput phone">
        <label for="inputPhone">手机号码
        </label>
        <Input id="inputPhone" v-model="inputPhone" placeholder="请输入手机号码" style="width: 300px"></Input><span style="font-size:12px;margin-left:5px" v-if="PhoneFlag" class="red">号码错误</span>
      </div>

      <!-- <div class="formInput sex">
        <label for="inputSex">性别
          <span class="red">*</span>
        </label>
        <Select v-model="sex" style="width:300px" id="inputSex">
          <Option v-for="item in sexList" :value="item.value" :key="item.value">{{ item.name }}</Option>
        </Select>
      </div> -->

      <div class="formInput userType">
        <label for="inputUserType">用户类型
          <span class="red">*</span>
        </label>
        <Select v-model="userType" style="width:300px" id="inputUserType">
          <Option v-for="item in userTypeList" :value="item.id" :key="item.id">{{ item.typeName }}</Option>
        </Select>
      </div>

      <div class="formInput operate flex">
        <div class="operate-btn" @click.stop.prevent="cancel">取消</div>
        <div class="operate-btn confirm-btn" @click.stop.prevent="confirm">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputUserId: "",
      inputNickName: "",
      inputEmail: "",
      inputPhone: "",
      showFlag: false,
      // sex: "女",
      // sexList: [
      //   {
      //     value: "1",
      //     name: "女"
      //   },
      //   {
      //     value: "2",
      //     name: "男"
      //   }
      // ],
      userType: "普通用户",
      userTypeList: [
        {
          id: "1",
          typeName: "普通用户"
        },
        {
          id: "2",
          typeName: "电台用户"
        },
        {
          id: "3",
          typeName: "资源账号"
        },
        {
          id: "4",
          typeName: "版权者"
        }
      ],
      emailFlag: false, //邮箱验证
      PhoneFlag: false //验证手机号码
    };
  },

  methods: {
    show() {
      this.showFlag = true;
    },
    hide() {
      this.showFlag = false;
    },
    confirm() {
      let fromData = {
        uuid: this.inputUserId,
        nickname: this.inputNickName,
        userEmail: this.inputEmail,
        phoneNumber: this.inputPhone,
        usertype: this.userType
      };

      if (
        /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(
          this.inputEmail
        ) == false
      ) {
        this.emailFlag = true;
        return false;
      }
      if (/^1[0-9]{10}$/.test(this.inputPhone) == false) {
        this.PhoneFlag = true;
        return false;
      }
      this.hide();
      // 数字为点击按钮所代表的type值
      this.$emit("confirm", "1");
    },
    cancel() {
      this.hide();
      this.$emit("cancel", "2");
    },
    clickClose() {
      console.log("fdhaj");
      this.hide();
      this.$emit("closeAlert");
    }
  }
};
</script>
<style lang="sass">
@import "~assets/sass/variable" 
@import "~assets/sass/mixin" 
@import "~assets/sass/base" 
.ivu-modal-wrap
  background: rgba(0,0,0,.3)
  .addMember-modal
    +center(500px,460px)
    background: $white
    border-radius: $border-radius-base
    .title
      color: $black !important
      font-size: $font-base-size
    .formInput
      margin: 30px 0 0 30px
      color: $gray
      label
        display: inline-block
        width: 70px
    .operate
      position: relative
      top: 0
      left: 265px 
      .operate-btn
        width: 60px
        height: 35px
        color: $white
        border-radius: $border-radius-base
        background: $gray-light
        margin-right: 30px
        line-height: 35px
        text-align: center 
      .confirm-btn  
        background: $theme-color
</style>

