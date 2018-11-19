// 任务管理
const TaskManage = () => import(/* webpackChunkName: TaskManage */ 'components/admin/taskManage/taskManage')


const taskManage = [
  {
    path: '/taskManage',
    component: TaskManage,
    name: 'taskManage',
    leaf: true,//只有一个,不写则代表有孩子节点
    title: '任务管理',
    meta: { title: '任务管理' },
    iconCls: 'ios-paper'
  }
]
export default taskManage