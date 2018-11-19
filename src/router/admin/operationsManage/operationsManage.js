//运营管理
const OperationsManage = () =>
  import("components/admin/operationsManage/operationsManage");
//推送管理
const PushManage = () =>
  import("components/admin/operationsManage/pushManage/pushManage");
//举报管理
const ReportManage = () =>
  import("components/admin/operationsManage/reportManage/reportManage");

const operationsManage = [
  {
    path: "/operationsManage",
    component: OperationsManage,
    name: "operationsManage",
    title: "运营管理",
    meta: {
      title: "运营管理"
    },
    redirect: {
      name: "pushManage"
    },
    iconCls: "plane", //图标
    children: [
      {
        path: "/pushManage",
        component: PushManage,
        name: "pushManage",
        title: "推送管理",
        meta: {
          title: "推送管理"
        }
      },
      {
        path: "/reportManage",
        component: ReportManage,
        name: "reportManage",
        title: "举报管理",
        meta: {
          title: "举报管理"
        }
      }
    ]
  }
];
export default operationsManage;
