// 客服中心
const CustomerService = () => import(/* webpackChunkName: CustomerService */ 'components/admin/customerService/customerService')


const customerService = [
  {
    path: '/customerService',
    component: CustomerService,
    name: 'customerService',
    leaf: true,//只有一个,不写则代表有孩子节点
    title: '客服中心',
    meta: { title: '客服中心' },
    iconCls: 'android-favorite'
  }
]
export default customerService