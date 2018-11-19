// 后台管理系统首页
const Home = () => import(/* webpackChunkName: Home */ 'components/admin/home/home')


const home = [
  {
    path: '/home',
    component: Home,
    name: 'home',
    leaf: true,//只有一个,不写则代表有孩子节点
    title: '首页',
    meta: { title: '首页' },
    iconCls: 'android-home'
  }
]
export default home