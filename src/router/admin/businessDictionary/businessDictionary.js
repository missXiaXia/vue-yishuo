// 业务字典
const BusinessDictionary = () =>
  import(/*webpackChunkName: BusinessDictionary*/ "components/admin/businessDictionary/businessDictionary");
// 业务字典-行政区划
const AdministrativeDivision = () =>
  import(/* webpackChunkName: AdministrativeDivision */ "components/admin/businessDictionary/administrativeDivision/administrativeDivision");
//城市管理
const CityManage = () =>
  import("components/admin/businessDictionary/cityManage/cityManage");

const businessDictionary = [
  {
    path: "/businessDictionary",
    component: BusinessDictionary,
    name: "businessDictionary",
    title: "业务字典",
    meta: {
      title: "业务字典"
    },
    redirect: {
      name: "administrativeDivision"
    },
    iconCls: "social-buffer", //图标
    children: [
      {
        path: "/administrativeDivision",
        component: AdministrativeDivision,
        name: "administrativeDivision",
        title: "行政区划",
        meta: {
          title: "行政区划"
        }
      },
      {
        path: "/cityManage",
        component: CityManage,
        name: "cityManage",
        title: "城市管理",
        meta: {
          title: "城市管理"
        }
      }
    ]
  }
];

export default businessDictionary;
