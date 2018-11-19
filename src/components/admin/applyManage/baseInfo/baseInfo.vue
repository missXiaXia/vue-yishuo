<template>
  <div class="baseInfo">
    <Form style="max-width:450px;padding:40px 0px 0px 40px" :model="formItem" :label-width="80">
        <FormItem label="项目名称">
            <Input v-model="formItem.input" placeholder="微信小程序"></Input>
        </FormItem>
        <FormItem label="项目类型">
            <Select v-model="formItem.select">
                <Option value="web端">web端</Option>
                <Option value="ios">ios端</Option>
                <Option value="andriod">安卓端</Option>
            </Select>
        </FormItem>
        <FormItem label="创建日期">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="选择日期" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <TimePicker type="time" placeholder="选择时间" v-model="formItem.time"></TimePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="单选框">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">不知道</Radio>
                <Radio label="female">该填啥</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="参与人数">
            <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="胡耀学"></Checkbox>
                <Checkbox label="徐训启"></Checkbox>
                <Checkbox label="李爽"></Checkbox>
                <Checkbox label="肖慧"></Checkbox>
                <Checkbox label="廖美蓉"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="项目状态">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
        <FormItem label="完成进度">
            <Slider v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="备注信息">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="文本域"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: {
        input: "",
        select: "",
        radio: "male",
        checkbox: [],
        switch: true,
        date: "",
        time: "",
        slider: [20, 50],
        textarea: ""
      }
    };
  }
};
</script>
