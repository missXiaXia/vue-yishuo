<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="userinfo">
          <Dropdown placement="bottom-end">
            <span class="head-name">
              {{curUserName}}
            </span>
            <Dropdown-menu slot="list">
              <Dropdown-item @click.native="modifyPassWord()">修改密码</Dropdown-item>
              <Dropdown-item @click.native="logout()" divided>退出</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  created() {
    this.routesList.push(this.$router.options.routes[3])
  },
  data() {
    return {
      // openNames: [this.$route.matched[0].name],
      // curUserName: sessionStorage.getItem('user').replace(/\"/g, ""),
      routesList: [],
      curUserName: '李霞',
      modeType: "vertical",
      modal1: false,
    }
  },
  methods: {
    modifyPassWord() {
      this.modal1 = true;
    },
    logout() {
      this.$router.push('/login');
    },
    menuSelect(name) {
      this.$router.push({ path: name })
    },
  },
}
</script>
<style lang="sass" scoped>
@import "~assets/sass/variable" 
.layout
  border: 1px solid #d7dde4
  background: #f5f7f9
  position: relative
  border-radius: 4px
  overflow: hidden
  .ivu-layout-header
    background: $theme-color
.userinfo
  display: inline-block
  float: right
  .ivu-dropdown 
    margin-top: 50px
.ivu-dropdown
  margin-right: 25px
  margin-top: 22px
.head-name 
  width: 100%
  height: 60px
  line-height: 60px
  float: right
  margin-top: -50px
  color: $white
  font-size: $font-base-size
.ivu-select-dropdown 
  .ivu-dropdown 
    margin: 0px 12px 0px 0px    
</style>