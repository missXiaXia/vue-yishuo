const User = () => import(/* webpackChunkName: User */ "components/user/index");
const Login = () =>
  import(/* webpackChunkName: Login */ "components/user/login/login");

const user = [
  {
    path: "/user",
    component: User,
    name: "user",
    title: "用户页面",
    meta: {
      title: "用户页面"
    },
    redirect: {
      name: "login"
    },
    children: [
      {
        path: "/login",
        component: Login,
        name: "login",
        title: "管理平台",
        meta: {
          title: "管理平台"
        }
      }
    ]
  }
];
export default user;
