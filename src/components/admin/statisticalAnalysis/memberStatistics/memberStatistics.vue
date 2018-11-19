<template>
  <div class="memberStatistics">
    <div class="member">
      <span class="memberTotal">会员总数: &nbsp;&nbsp;&nbsp;&nbsp; 125421</span>
    </div>
    <Form :model="formItem" :label-width="0">
         <FormItem>
            <Row>
                <Col span="2" style="text-align: center;margin-left:-30px">开始时间
                </Col>
                 <Col span="3">
                    <DatePicker type="date" placeholder="开始时间" v-model="formItem.startDate"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">结束时间
                </Col>
                <Col span="3">
                    <DatePicker type="date" placeholder="结束时间" v-model="formItem.endDate"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">
                -
                </Col>
                <Col span="2">
                <Button type="primary" icon="ios-search"  @click="searchDate">查询</Button>
                </Col>  
            </Row>
        </FormItem>
    </Form>
     <Row class="margin-top-10">
      <Card>
        <p slot="title" class="card-title">
          <Icon type="ios-shuffle-strong"></Icon>
          新增会员柱状图
        </p>
        <div class="line-chart-con">
          <div style="width:100%;height:600px;" id="addMember"></div>
        </div>
      </Card>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
import { memberSratisticsCtrl } from "controller/admin/statisticalAnalysis/memberSratistics/memberSratisticsCtrl";

export default {
  mixins: [memberSratisticsCtrl]
};
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
.memberStatistics
  .member
    margin-bottom: 30px
    .memberTotal
      font-weight: bold
</style>
