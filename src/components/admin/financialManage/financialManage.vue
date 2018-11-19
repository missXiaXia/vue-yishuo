<template>
  <div class="page">
    <template>
      <div id="filePicker">选择图片</div>

      <!-- <div class="file-panel">
        <h2>图片列表</h2>
        <div class="file-list">
          <ul class="file-item" :class="`file-${file.id}`" v-for="file in fileList">
            <li class="file-name">{{file.name}}</li>
            <li class="file-size">{{fileSize(file.size)}}</li>
          </ul>
          <div class="no-file" v-if="!fileList.length">
            <i class="iconfont icon-empty-file"></i> 暂无待上传文件</div>
        </div>
      </div> -->

      <vue-upload ref="uploader" uploadButton="#filePicker" :url="uploadImgUrl" :formData="formImgData" multiple accept='image' @fileChange="fileChange" @start="onStart" @success="onSuccess" @uploadError="onError" @error="error" @complete="complete"></vue-upload>
    </template>

    <template>
      <div id="voicePicker">选择声音</div>
      <!-- <div class="file-panel">
        <h2>声音列表</h2>
        <div class="file-list">
          <ul class="file-item" :class="`file-${file.id}`" v-for="voice in voiceList">
            <li class="file-name">{{voice.name}}</li>
            <li class="file-size">{{fileSize(voice.size)}}</li>
          </ul>
          <div class="no-file" v-if="!voiceList.length">
            <i class="iconfont icon-empty-file"></i> 暂无待上传声音</div>
        </div>
      </div> -->
      <vue-upload ref="uploader" uploadButton="#voicePicker" :fileSingleSizeLimit="voiceSingleSizeLimit" :url="uploadVoiceUrl" :formData="formVoiceData" multiple accept='video' @fileChange="fileChange" @start="onStart" @success="onSuccess" @uploadError="onError" @error="error" @complete="complete"></vue-upload>
    </template>
  </div>
</template>

<script>
import vueUpload from 'base/upload/upload'
import { fileUrltest,voiceUrltest } from 'serviceApi/config'
export default {
  components: {
    vueUpload
  },
  data() {
    return {
      fileList: [],
      voiceList:[],
      uploadImgUrl: fileUrltest + 'yishuo/api_web/upload/image',
      uploadVoiceUrl: voiceUrltest + 'voice/upload_voice',
      formImgData: { img: 'file' },
      formVoiceData: { voice_file: 'file' },
      voiceSingleSizeLimit: 200 * 1024 * 1024
    }
  },
  mounted() {

  },
  computed: {
    uploader() {
      return this.$refs.uploader
    }
  },
  methods: {
    // 当有文件被添加进队列的时候
    fileChange(file) {
      console.log(file)
      if (!file.size) {
        return
      }
      this.fileList.push(file)
      this.voiceList.push(file)
      console.log(this.fileList)
      
    },
    // 某个文件开始上传前触发，一个文件只会触发一次
    onStart(file) {
      alert('uploadStart:开始上传前触发')
    },
    // 当文件上传成功时触发
    onSuccess(file, response) {
      alert('uploadSuccess:上传成功')
    },
    // 当文件上传出错时触发
    onError(file, reason) {
      alert('uploadError:上传出错')
    },
    error(errorMessage) {
      alert('error:失败')
    },
    complete(file, response) {
      alert('complete:不管成功或者失败，文件上传完成时触发')
    },


    resume(file) {
      this.uploader.upload(file)
    },
    stop(file) {
      this.uploader.stop(file)
    },
    remove(file) {
      // 取消并中断文件上传
      this.uploader.cancelFile(file)
      // 在队列中移除文件
      this.uploader.removeFile(file, true)

      // 在ui上移除
      let index = this.fileList.findIndex(ele => ele.id === file.id)
      this.fileList.splice(index, 1)
    },

    fileSize(size) {
      return WebUploader.Base.formatSize(size)
    },
  },

}
</script>

<style lang="sass">
.file-panel 
  width: 840px
  margin-top: 10px
  box-shadow: 0 2px 12px 1px rgba(0, 0, 0, 0.1)
  > h2 
    height: 40px
    line-height: 40px
    padding: 0 10px
    border-radius: 4px 4px 0 0
    border-bottom: 1px solid #ccc
    background-color: #fff
  .file-list 
    position: relative
    height: 360px
    overflow-y: auto
    background-color: rgb(250, 250, 250)
  .file-item 
    position: relative
    height: 50px
    line-height: 50px
    padding: 0 10px
    border-bottom: 1px solid #ccc
    background-color: #fff
    z-index: 1
    > li 
      display: inline-block
  .file-name 
    width: 40%
    margin-left: 10px
  .file-size 
    width: 20%
  .file-status 
    width: 20%
  .file-operate 
    width: 10%
    > a 
      padding: 10px 5px
      cursor: pointer
      color: #666
      &:hover 
        color: #ff4081
  .no-file 
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    font-size: 16px
</style>
