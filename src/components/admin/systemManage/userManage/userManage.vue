<template>
  <div class="userManage">
    <div class="addClass">
      <Button type="primary" @click="addUser" style="margin-bottom:20px">新增用户</Button>
    </div>
    <div class="searchContainer">
      <label for="searchId">用户ID</label>
       <Input id="searchId" v-model="searchId" placeholder="查询用户ID"></Input> 
      <label for="searchNickname">用户昵称</label>
       <Input id="searchNickname" v-model="searchNickname" placeholder="查询用户昵称"></Input>
      <label for="searchUserType">用户类型</label>
       <Input id="searchUserType" v-model="searchUserType" placeholder="查询用户类型"></Input> 
        <Button type="primary" icon="ios-search" @click="search">查询</Button>
    </div>
    <Table stripe  border :columns="columns" :data="data1"></Table>
    <Page class="paging" :total="dataCount" :page-size="pageSize" show-total show-elevator @on-change="changepage"></Page>
    <confirm ref="confirm" @cancel="_refund" :title="title" :text="text"></confirm>
    <add-member ref="addMember"></add-member>
  </div>
</template>

<script type="text/ecmascript-6">
import { userManageCtrl } from "controller/admin/systemManage/userManage/userManageCtrl";
export default {
  mixins: [userManageCtrl],
  methods: {}
};
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
.userManage
  .paging
    transform: translate(35%)
    margin-top: 30px
  .searchContainer
    margin-bottom: 30px
    .ivu-input-wrapper
      margin-right: 15px
      width: 200px
   
</style>
