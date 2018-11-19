// 系统管理
const SystemManage = () =>
  import(/*webpackChunkName: SystemManage*/ "components/admin/systemManage/systemManage");
// 系统管理-权限管理
const AuthorityManage = () =>
  import(/* webpackChunkName: AuthorityManage */ "components/admin/systemManage/authorityManage/authorityManage");
//系统管理-业务字典
const BusinessDictionary = () =>
  import(/* webpackChunkName: BusinessDictionary */ "components/admin/systemManage/businessDictionary/businessDictionary");
//系统管理-角色管理
const RoleManage = () =>
  import(/* webpackChunkName: RoleManage */ "components/admin/systemManage/roleManage/roleManage");
//系统管理-用户管理
const UserManage = () =>
  import(/* webpackChunkName: UserManage */ "components/admin/systemManage/userManage/userManage");

const systemManage = [
  {
    path: "/systemManage",
    component: SystemManage,
    name: "systemManage",
    title: "系统管理",
    meta: {
      title: "系统管理"
    },
    redirect: {
      name: "authorityManage"
    },
    iconCls: "ios-gear", //图标
    children: [
      {
        path: "/authorityManage",
        component: AuthorityManage,
        name: "authorityManage",
        title: "权限管理",
        meta: {
          title: "权限管理"
        }
      },
      {
        path: "/businessDictionary",
        component: BusinessDictionary,
        name: "businessDictionary",
        title: "业务字典",
        meta: {
          title: "业务字典"
        }
      },
      {
        path: "/roleManage",
        component: RoleManage,
        name: "roleManage",
        title: "角色管理",
        meta: {
          title: "角色管理"
        }
      },
      {
        path: "/userManage",
        component: UserManage,
        name: "userManage",
        title: "用户管理",
        meta: {
          title: "用户管理"
        }
      }
    ]
  }
];

export default systemManage;
