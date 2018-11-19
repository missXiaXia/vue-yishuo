import Confirm from "base/confirm/confirm";
import AddMember from "base/addmember/addmember";
export const userManageCtrl = {
  name: "userManage",
  components: {
    Confirm,
    AddMember
  },
  data() {
    return {
      searchId: "",
      searchNickname: "",
      searchUserType: "",
      title: "删除",
      text: "你确定要删除",
      ajaxHistoryData: [],
      data1: [],
      dataCount: 0,
      pageSize: 30,
      columns: [
        { title: "用户ID", key: "uuid", align: "center" },
        { title: "用户昵称", key: "nickname", align: "center" },
        { title: "邮箱", key: "userEmail", align: "center" },
        { title: "手机号码", key: "phoneNumber", align: "center" },
        { title: "用户类型", key: "usertype", align: "center" },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, data1) => {
            //搜索用户id //搜索用户昵称 //搜索用户类型 //初始化信息总数 //每页显示条数
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(this.data1);
                    }
                  }
                },
                "编辑"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(this.data1);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ]
    };
  },
  created() {
    this.generateData();
  },
  methods: {
    //生成假数据
    generateData() {
      this.mockJsonData("/userManage").then(res => {
        this.ajaxHistoryData = res.userArr;
        this.dataCount = res.userArr.length; //100长度
        this.handleListApproveHistory();
      });
    },
    //获取历史记录信息
    handleListApproveHistory() {
      // 保存取到的所有数据
      // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
      if (this.ajaxHistoryData.length < this.pageSize) {
        this.data1 = this.ajaxHistoryData;
      } else {
        this.data1 = this.ajaxHistoryData.slice(0, this.pageSize);
      }
    },
    changepage(index) {
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.data1 = this.ajaxHistoryData.slice(_start, _end);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    //编辑按钮
    show(index) {
      console.log(index);
      this.$refs.confirm.show();
    },
    _refund() {
      this.$refs.confirm.hide();
    },
    remove(index) {
      this.$refs.confirm.show();
      console.log(index);
      // this.data1.splice(index, 1);
    },
    // 新增用户
    addUser() {
      this.$refs.addMember.show();
    },
    //查询
    search() {
      console.log(this.data1);
      let searchArr = [];
      for (let i = 0; i < this.data1.length; i++) {
        if (this.searchId == this.data1[i].uuid) {
          searchArr.push(this.data1[i]);
        } else if (this.searchNickname == this.data1[i].nickname) {
          searchArr.push(this.data1[i]);
        } else if (this.searchUserType == this.data1[i].usertype) {
          searchArr.push(this.data1[i]);
        }
      }
      if (searchArr.length == 0) {
        this.$Message.error("匹配失败");
      } else {
        this.data1 = searchArr;
      }
    }
  }
};
