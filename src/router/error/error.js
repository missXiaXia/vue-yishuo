
const Error = () => import(/* webpackChunkName: Error */ 'components/error/index')


const error = [
  {
    path: '/error',
    component: Error,
    name: 'error',
    meta: { title: '页面丢失' }
  }
]
export default error
