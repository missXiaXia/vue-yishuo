// 统计分析
const StatisticalAnalysis = () =>
  import(/* webpackChunkName: StatisticalAnalysis */ "components/admin/statisticalAnalysis/statisticalAnalysis");
// 统计分析-会员统计
const MemberStatistics = () =>
  import(/* webpackChunkName: MemberStatistics */ "components/admin/statisticalAnalysis/memberStatistics/memberStatistics");
//用户统计
const UsersStatistics = () =>
  import("components/admin/statisticalAnalysis/usersStatistics/usersStatistics");

const statisticalAnalysis = [
  {
    path: "/statisticalAnalysis",
    component: StatisticalAnalysis,
    name: "statisticalAnalysis",
    title: "统计分析",
    meta: {
      title: "统计分析"
    },
    iconCls: "stats-bars",
    children: [
      {
        path: "/memberStatistics",
        component: MemberStatistics,
        name: "memberStatistics",
        title: "会员统计",
        meta: {
          title: "会员统计"
        }
      },
      {
        path: "/usersStatistics",
        component: UsersStatistics,
        name: "usersStatistics",
        title: "用户统计",
        meta: {
          title: "用户统计"
        }
      }
    ]
  }
];
export default statisticalAnalysis;
