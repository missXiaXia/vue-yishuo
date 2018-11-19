import {
  setToastMsg
} from 'assets/js/mixin'
import Confirm from 'base/confirm/confirm'

export const homeCtrl = {
  name: 'home',
  mixins: [setToastMsg],
  components: {
    Confirm
  },
  data() {
    return {
      text: '点击我有惊喜哦',
      title: "弹窗标题",
      cancelBtnText: "取消",
    }
  },
  created() {
    console.log('进入home的js')
    this.setNewsApi()
    this.setGoodApi()
  },
  methods: {
    // 模拟接口返回数据
    setNewsApi: function () {
      this.mockJsonData('/home1')
        .then(res => {
          console.log(res)
        })
    },
    setGoodApi:function(){
      this.mockJsonData('/home2')
        .then(res => {
          console.log(res)
        })
    },
    homeClick() {
      // this.setToastMsg('操作成功')
      console.log('点击了home的homeClick事件')
      this.$refs.confirm.show()
    },
    _refund() {
      this.setToastMsg('点击弹窗按钮成功')
    }
  },
}
