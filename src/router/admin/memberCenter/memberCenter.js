// 会员中心
const MemberCenter = () => import(/*webpackChunkName: MemberCenter*/'components/admin/memberCenter/memberCenter')
// 会员中心-注册管理
const RegisterManage = () =>
  import ( /* webpackChunkName: RegisterManage */ 'components/admin/memberCenter/registerManage/registerManage')
//会员中心-群组管理
const GroupsManage = () =>
  import ( /* webpackChunkName: GroupsManage */ 'components/admin/memberCenter/groupsManage/groupsManage')

const memberCenter = [{
  path: '/memberCenter',
  component: MemberCenter,
  name: 'memberCenter',
  title: '会员中心',
  meta: {
    title: '会员中心'
  },
  redirect: {
    name: 'registerManage'
  },
  iconCls: 'person',//图标
  children:[
    {
    path:'/registerManage',
    component:RegisterManage,
    name:'registerManage',
    title:'注册管理',
    meta:{
      title:'注册管理'
    }
  },
  {
    path:'/groupsManage',
    component:GroupsManage,
    name:'groupsManage',
    title:'群组管理',
    meta:{
      title:'群组管理'
    }
  }
]
}]

export default memberCenter
