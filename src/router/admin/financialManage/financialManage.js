// 财务管理
const FinancialManage = () => import(/* webpackChunkName: financialManage */ 'components/admin/financialManage/financialManage')


const financialManage = [
  {
    path: '/financialManage',
    component: FinancialManage,
    name: 'financialManage',
    leaf: true,//只有一个,不写则代表有孩子节点
    title: '财务管理',
    meta: { title: '财务管理' },
    iconCls: 'cash'
  }
]
export default financialManage