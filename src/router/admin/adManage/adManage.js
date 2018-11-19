// 广告管理
const AdManage = () =>
  import ( /*webpackChunkName: AdManage*/ "components/admin/adManage/adManage");
// 广告信息
const AdInformation = () =>
  import ( /* webpackChunkName: adInformation */ "components/admin/adManage/adInformation/adInformation");
//广告商管理
const AdvertiserManage = () =>
  import ("components/admin/adManage/advertiserManage/advertiserManage");
//广告内容审查
const AdContentExamine = () =>
  import ("components/admin/adManage/adContentExamine/adContentExamine");
//广告收费管理
const AdChargeManage = () =>
  import ("components/admin/adManage/adChargeManage/adChargeManage");
//广告收益管理
const AdvertisingRevenue = () =>
  import ("components/admin/adManage/advertisingRevenue/advertisingRevenue");
//广告位管理
const AdPositionManage = () =>
  import ("components/admin/adManage/adPositionManage/adPositionManage");

const adManage = [{
  path: "/adManage",
  component: AdManage,
  name: "adManage",
  title: "广告管理",
  meta: {
    title: "广告管理"
  },
  redirect: {
    name: "adInformation"
  },
  iconCls: "android-folder", //图标
  children: [{
      path: "/adInformation",
      component: AdInformation,
      name: "adInformation",
      title: "广告信息",
      meta: {
        title: "广告信息"
      }
    },
    {
      path: "/advertiserManage",
      component: AdvertiserManage,
      name: "advertiserManage",
      title: "广告商管理",
      meta: {
        title: "广告商管理"
      }
    },
    {
      path: "/adContentExamine",
      component: AdContentExamine,
      name: "adContentExamine",
      title: "广告内容审查",
      meta: {
        title: "广告内容审查"
      }
    },

    {
      path: "/adChargeManage",
      component: AdChargeManage,
      name: "adChargeManage",
      title: "广告收费管理",
      meta: {
        title: "广告收费管理"
      }
    },
    {
      path: "/advertisingRevenue",
      component: AdvertisingRevenue,
      name: "advertisingRevenue",
      title: "广告收益管理",
      meta: {
        title: "广告收益管理"
      }
    },
    {
      path: "/adPositionManage",
      component: AdPositionManage,
      name: "adPositionManage",
      title: "广告位管理",
      meta: {
        title: "广告位管理"
      }
    }
  ]
}];

export default adManage;
