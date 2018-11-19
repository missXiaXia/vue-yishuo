// 整合admin文件夹下的路由
import home from "./home/home"; // 后台管理系统首页
import memberCenter from "./memberCenter/memberCenter"; //会员中心
import adManage from "./adManage/adManage"; //广告管理
import contentManage from "./contentManage/contentManage"; //内容管理
import statisticalAnalysis from "./statisticalAnalysis/statisticalAnalysis"; //统计分析
import financialManage from "./financialManage/financialManage"; //财务管理
import taskManage from "./taskManage/taskManage"; //任务管理
import customerService from "./customerService/customerService"; //客服中心
import businessDictionary from "./businessDictionary/businessDictionary"; //业务字典
import systemManage from "./systemManage/systemManage"; //系统管理
import applyManage from "./applyManage/applyManage"; //配置管理
import createTerrace from "./createTerrace/createTerrace"; //创作平台
import operationsManage from "./operationsManage/operationsManage"; //运营管理
import liveManage from "./liveManage/liveManage"; //直播管理
import productCentre from "./productCentre/productCentre"; //产品管理
import orderFormManage from "./orderFormManage/orderFormManage"; //订单管理

const Admin = () =>
  import(/* webpackChunkName: Admin */ "components/admin/index");

const admin = [
  {
    path: "/admin",
    component: Admin,
    name: "admin",
    redirect: {
      name: "home"
    },
    title: "管理页面",
    meta: {
      title: "管理页面"
    },
    children: [
      ...home,
      ...memberCenter,
      ...contentManage,
      ...createTerrace,
      ...liveManage,
      ...adManage,
      ...orderFormManage,
      ...operationsManage,
      ...productCentre,
      ...statisticalAnalysis,
      ...businessDictionary,
      ...taskManage,
      ...financialManage,
      ...customerService,
      ...applyManage,
      ...systemManage
    ]
  }
];

export default admin;
