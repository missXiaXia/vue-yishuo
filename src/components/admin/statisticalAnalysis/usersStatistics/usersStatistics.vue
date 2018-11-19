<template>
  <div class="usersStatistics">
    <div class="userTypeAndTotal">
       <Select class="choiceType" v-model="model1" style="width:200px">
        <Option v-for="item in iosAndAndriod" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <span class="userTotal">总用户数: &nbsp;&nbsp;&nbsp;&nbsp; 220979</span>
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
          新增用户趋势图
        </p>
        <div class="line-chart-con">
          <div style="width:100%;height:400px;" id="addUser"></div>
        </div>
      </Card>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
import { usersStatisticsCtrl } from "controller/admin/statisticalAnalysis/usersStatistics/usersStatisticsCtrl";
export default {
  mixins: [usersStatisticsCtrl]
};
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
.usersStatistics
  .userTypeAndTotal
    margin-bottom: 30px
    .choiceType
      margin-right: 30px
    .userTotal
      font-weight: bold
</style>
