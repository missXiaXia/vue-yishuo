//订单管理
const OrderFormManage = () =>
  import("components/admin/orderFormManage/orderFormManage");
//订单记录
const OrderFormRecord = () =>
  import("components/admin/orderFormManage/orderFormRecord/orderFormRecord");

const orderFormManage = [
  {
    path: "/orderFormManage",
    component: OrderFormManage,
    name: "orderFormManage",
    title: "订单管理",
    meta: {
      title: "订单管理"
    },
    redirect: {
      name: "orderFormRecord"
    },
    iconCls: "social-octocat", //图标
    children: [
      {
        path: "/orderFormRecord",
        component: OrderFormRecord,
        name: "orderFormRecord",
        title: "订单记录",
        meta: {
          title: "订单记录"
        }
      }
    ]
  }
];

export default orderFormManage;
