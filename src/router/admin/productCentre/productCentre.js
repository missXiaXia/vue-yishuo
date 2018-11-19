//产品中心
const ProductCentre = () =>
  import("components/admin/productCentre/productCentre");
//礼物品类
const GiftCategory = () =>
  import("components/admin/productCentre/giftCategory/giftCategory");
//礼物管理
const GiftManage = () =>
  import("components/admin/productCentre/giftManage/giftManage");

const productCentre = [
  {
    path: "/productCentre",
    component: ProductCentre,
    name: "productCentre",
    title: "产品中心",
    meta: {
      title: "产品中心"
    },
    redirect: {
      name: "giftManage"
    },
    iconCls: "model-s", //图标
    children: [
      {
        path: "/giftManage",
        component: GiftManage,
        name: "giftManage",
        title: "礼物管理",
        meta: {
          title: "礼物管理"
        }
      },
      {
        path: "/giftCategory",
        component: GiftCategory,
        name: "giftCategory",
        title: "礼物品类",
        meta: {
          title: "礼物品类"
        }
      }
    ]
  }
];

export default productCentre;
