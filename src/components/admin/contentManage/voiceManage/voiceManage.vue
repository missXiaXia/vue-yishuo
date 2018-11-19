<template>
  <div class="voiceManage">
      <div class="addClass">
        <Button type="primary" v-on:click="addVioce" style="margin-bottom:20px">添加声音</Button>
      </div>
    <Table stripe  border :columns="columns" :data="voiceList"></Table>>
    <Page class="paging" :total="dataCount" :page-size="pageSize" show-total show-elevator @on-change="changepage"></Page>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ajaxHistoryData: [],
      dataCount: 0, //初始化信息总数
      pageSize: 10, //每页显示条数
      columns: [
        {
          title: "声音ID",
          key: "voiceId"
        },
        {
          title: "声音名称",
          key: "voiceName"
        },
        {
          title: "声音类型",
          key: "voiceType"
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
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
                      this.show(params.index);
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
                      this.remove(params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      voiceList: []
    };
  },
  created() {
    this.generateData();
  },
  methods: {
    //生成假数据
    generateData() {
      this.mockJsonData("/voiceManage").then(res => {
        //console.log(res);
        this.ajaxHistoryData = res.voiceArr;
        this.dataCount = res.voiceArr.length; //100长度
        this.handleListApproveHistory();
      });
    },
    //获取历史记录信息
    handleListApproveHistory() {
      // 保存取到的所有数据
      // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
      if (this.ajaxHistoryData.length < this.pageSize) {
        this.voiceList = this.ajaxHistoryData;
      } else {
        this.voiceList = this.ajaxHistoryData.slice(0, this.pageSize);
      }
    },
    changepage(index) {
      var _start = (index - 1) * this.pageSize;
      var _end = index * this.pageSize;
      this.voiceList = this.ajaxHistoryData.slice(_start, _end);
    },
    //添加声音
    addVioce() {
      console.log("添加声音");
    },
    //编辑按钮
    show(index) {
      console.log(index);
      this.$Modal.info({
        title: "编辑",
        content: `<form class="compile" style="display:flex;flex-direction:column;justify-content:space-around"> <label for="voiceId">voiceId:</label><Input v-model="value" id="voiceId" placeholder="${
          this.voiceList[index].voiceId
        }" style="border-radius: 4px;margin-bottom:10px;width:275px"></Input><br><label for="voiceName">voiceName:</label><Input id="voiceName" v-model="value1" placeholder="${
          this.voiceList[index].voiceName
        }" style="border-radius: 4px;margin-bottom:10px;width:275px"></Input>
        <br><label for="voiceType">voiceType:</label><Input id="voiceType" v-model="value2" placeholder="${
          this.voiceList[index].voiceType
        }" style="border-radius: 4px;margin-bottom:10px;width:275px"></Input></form>`
      });
    },
    //删除
    remove(index) {
      this.$Modal.error({
        title: "删除",
        content: `<h3>你确定要删除吗</h3>`
      });
      this.voiceList.splice(index, 1);
    }
  }
};
</script>
<style lang="sass" rel="stylesheet/sass" scoped>
.paging
  float: right
  margin-top: 10px
</style>