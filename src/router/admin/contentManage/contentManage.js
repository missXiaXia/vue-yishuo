// 内容管理
const ContentManage = () =>
  import("components/admin/contentManage/contentManage");
//声音管理
const VoiceManage = () =>
  import("components/admin/contentManage/voiceManage/voiceManage");
//专辑管理
const AlbumManage = () =>
  import("components/admin/contentManage/albumManage/albumManage");

const contentManage = [
  {
    path: "/contentManage",
    component: ContentManage,
    name: "contentManage",
    title: "内容管理",
    meta: {
      title: "内容管理"
    },
    redirect: {
      name: "voiceManage"
    },
    iconCls: "ios-filing", //图标
    children: [
      {
        path: "/voiceManage",
        component: VoiceManage,
        name: "voiceManage",
        title: "声音管理",
        meta: {
          title: "声音管理"
        }
      },
      {
        path: "/albumManage",
        component: AlbumManage,
        name: "albumManage",
        title: "专辑管理",
        meta: {
          title: "专辑管理"
        }
      }
    ]
  }
];
export default contentManage;
