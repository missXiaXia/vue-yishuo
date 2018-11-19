//直播管理
const LiveManage = () => import("components/admin/liveManage/liveManage");
//直播列表
const LiveList = () => import("components/admin/liveManage/liveList/liveList");
//直播评论
const LiveComment = () =>
  import("components/admin/liveManage/liveComment/liveComment");

const liveManage = [
  {
    path: "/liveManage",
    component: LiveManage,
    name: "liveManage",
    title: "直播管理",
    meta: {
      title: "直播管理"
    },
    redirect: {
      name: "liveList"
    },
    iconCls: "monitor", //图标
    children: [
      {
        path: "/liveList",
        component: LiveList,
        name: "liveList",
        title: "直播列表",
        meta: {
          title: "直播列表"
        }
      },
      {
        path: "/liveComment",
        component: LiveComment,
        name: "liveComment",
        title: "直播评论",
        meta: {
          title: "直播评论"
        }
      }
    ]
  }
];
export default liveManage;
