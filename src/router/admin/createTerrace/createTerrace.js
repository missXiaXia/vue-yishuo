//创作平台
const CreateTerrace = () =>
  import("components/admin/createTerrace/createTerrace");
//有声作品
const VoicedWorks = () =>
  import("components/admin/createTerrace/voicedWorks/voicedWorks");
//主播管理
const AnchorwomansManage = () =>
  import("components/admin/createTerrace/anchorwomansManage/anchorwomansManage");

const createTerrace = [
  {
    path: "/createTerrace",
    component: CreateTerrace,
    name: "createTerrace",
    title: "创作平台",
    meta: {
      title: "创作平台"
    },
    redirect: {
      name: "anchorwomansManage"
    },
    iconCls: "leaf", //图标
    children: [
      {
        path: "/anchorwomansManage",
        component: AnchorwomansManage,
        name: "anchorwomansManage",
        title: "主播管理",
        meta: {
          title: "主播管理"
        }
      },
      {
        path: "/voicedWorks",
        component: VoicedWorks,
        name: "voicedWorks",
        title: "有声作品",
        meta: {
          title: "有声作品"
        }
      }
    ]
  }
];
export default createTerrace;
