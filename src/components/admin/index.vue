<template>
  <div class="layout">
    <Header>
      <a class="logo" href="/home"><img src="../../assets/img/logo.png" alt=""><span>一说管理平台</span></a>
      <div class="userinfo">
        <Dropdown placement="bottom-end">
          <span class="head-name">
            <span class="userName">{{curUserName}} </span> 
            <span class="logout" @click="logout()">退出  </span>  
            <span class="alterPassword" @click="modifyPassWord()">修改密码  </span> 
          </span>     
        </Dropdown>
        
      </div>
    </Header>
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Menu :mode="modeType" theme="light" width="auto" @on-select="menuSelect" accordion>
          <template v-for="(item,index) in routesList">
            <template v-for="(child,childIndex) in item.children">
              <!-- 多个叶子 -->
              <Submenu :name="child.name" v-if="!child.leaf">
                <template slot="title">
                  <Icon :type="child.iconCls" :size="iconSize"></Icon>
                  <span class="layout-text">{{child.title}}</span>
                </template>
                <template v-for="(childItem,childItemIndex) in child.children">
                  <Menu-item :name="childItem.name">{{childItem.title}}</Menu-item>
                </template>
              </Submenu>
              <!--一个叶子 &&child.children.length>0 -->
              <template v-if="child.leaf">
                <Menu-item :name="child.path">
                  <Icon :type="child.iconCls" :size="iconSize"></Icon>
                  <span class="layout-text">{{child.title}}</span>
                </Menu-item>
              </template>
            </template>

          </template>

        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
              <Breadcrumb-item>{{$route.meta.title}}</Breadcrumb-item>
            </Breadcrumb>
          </div>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
      </i-col>
    </Row>
     <Modal v-model="modal1" title="修改密码" @on-ok.prevent="comfirmModifyPS" @on-cancel="cancel">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <Form-item label="原密码" prop="oldPassword">
          <Input v-model="formValidate.oldPassword" placeholder="请输入原始密码"></Input>
        </Form-item>
        <Form-item label="新密码" prop="newPassword">
          <Input v-model="formValidate.newPassword" placeholder="请输入新密码"></Input>
        </Form-item>
        <Form-item label="确认新密码" prop="resetPassword">
          <Input v-model="formValidate.resetPassword" placeholder="请再次输入新密码"></Input>
        </Form-item>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  created() {
    this.routesList.push(this.$router.options.routes[3]);
  },
  data() {
    return {
      // openNames: [this.$route.matched[1].name],
      // curUserName: sessionStorage.getItem('user').replace(/\"/g, ""),
      modal1: false,
      formValidate: {
        oldPassword: "",
        newPassword: "",
        resetPassword: ""
      },
      ruleValidate: {
        oldPassword: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        newPassword: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        resetPassword: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ]
      },
      routesList: [],
      curUserName: "晴",
      modeType: "vertical",
      spanLeft: 5, //spanLeft 左侧宽度大于等于5时显示，主要是为了点击按钮隐藏用的,没什么实际意义
      spanRight: 19,
      logoIsDisplay: false
    };
  },
  computed: {
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24;
    },
    logoSize() {
      if (this.spanLeft !== 5) {
        this.logoIsDisplay = true;
        return 50;
      } else {
        this.logoIsDisplay = false;
        return 0;
      }
    }
  },
  methods: {
    modifyPassWord() {
      this.modal1 = true;
    },
    logout() {
      this.$router.push("/login");
    },
    comfirmModifyPS() {
      return false;
      this.$refs.formValidate.validate(valid => {
        if (valid) {
          this.modal1 = false;
          //         this.loading = false;
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("表单验证失败!");
          return false;
        }
      });
      // this.$Message.info('点击了确定');
    },
    cancel() {
      this.modal1 = false;
      this.$Message.info("点击了取消");
    },
    menuSelect(name) {
      this.$router.push({ path: name });
    }
  }
};
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
@import "~assets/sass/variable" 
.ivu-col-span-19
  width: 85%
  .layout-header
.ivu-col-span-5
  width: 15%  
.ivu-menu-item>i,.ivu-menu-submenu-title>i
  font-size: $font-big-size !important
.layout
  background: #f5f7f9
  position: relative
  overflow: hidden
  height: 100%
  .ivu-row-flex,.ivu-menu-light 
    height: 100%
    width: 100%
  .ivu-layout-header  
    background: $theme-color
    .logo
      display: inline-block
      height: 31px
      line-height: 31px
      margin-top: 16px
      >img
        margin-right: 6px
      >span
       float: right
       font-size: 24px
       vertical-align: middle
       Letter-spacing: 6px
       color: #fff
.layout-breadcrumb 
  padding: 0 15px 
  float: left
.layout-content 
  margin: 15px 0 0 15px
  background: #fff
  border-radius: 4px
  height: 100%
.layout-content-main 
  padding: 10px
.layout-copy 
  text-align: center
  padding: 10px 0 20px
  color: #9ea7b4
.layout-header 
  height: 60px
  line-height: 60px
  background: #fff
.layout-logo-left 
  width: 90%
  height: 60px
  line-height: 60px
  font-size: 28px
  text-align: center
.layout-ceiling-main 
  a 
    color: #9ba7b5
.layout-hide-text 
  .layout-text 
    display: none
.ivu-col
  transition: width 0.2s ease-in-out

.userinfo
  display: inline-block
  float: right
  line-height: 16px
  .ivu-dropdown 
    margin-top: 50px
.ivu-dropdown
  margin-right: 25px
  margin-top: 22px
.ivu-menu-submenu-title
  padding: 14px
.head-name
  width: 100%
  height: 60px
  line-height: 60px
  float: right
  margin-top: -50px
  color: $white
  font-size: 14px
  .userName
    margin-right: 20px
  .logout
    float: right
    cursor: pointer
  .alterPassword
    float: right
    cursor: pointer
    margin-right: 20px
.ivu-select-dropdown 
  .ivu-dropdown 
    margin: 0px 12px 0px 0px

</style>

         