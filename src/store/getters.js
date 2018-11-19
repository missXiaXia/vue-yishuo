// 从 store 中的 state 中派生出一些状态 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
// 参考链接 https://vuex.vuejs.org/zh-cn/getters.html

import state from "./state"

export const toastMsg = state => state.toastMsg

export const uuid = state => state.uuid

export const userId = state => state.userId