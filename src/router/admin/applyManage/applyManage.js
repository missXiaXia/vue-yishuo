//配置管理
const ApplyManage = () => import("components/admin/applyManage/applyManage");
//基本信息
const BaseInfo = () => import("components/admin/applyManage/baseInfo/baseInfo");
//版本管理
const VersionsManage = () =>
  import("components/admin/applyManage/versionsManage/versionsManage");

const applyManage = [
  {
    path: "/applyManage",
    component: ApplyManage,
    name: "applyManage",
    title: "配置管理",
    meta: {
      title: "配置管理"
    },
    redirect: {
      name: "baseInfo"
    },
    iconCls: "settings", //图标
    children: [
      {
        path: "/baseInfo",
        component: BaseInfo,
        name: "baseInfo",
        title: "基本信息",
        meta: {
          title: "基本信息"
        }
      },
      {
        path: "/versionsManage",
        component: VersionsManage,
        name: "versionsManage",
        title: "版本管理",
        meta: {
          title: "版本管理"
        }
      }
    ]
  }
];
export default applyManage;
