<template>
 <div align="center">
     <script id="editor" type="text/plain" style="width:100%;height:300px;" name="content"></script>
 </div>
</template>

  
<script>
  // import '../../static/ueditor/ueditor.config.js'
  // import '../../static/ueditor/ueditor.all.js'
  // import '../../static/ueditor/lang/zh-cn/zh-cn.js'
  // import '../../static/ueditor/themes/default/css/ueditor.css'
  
  export default {
    name: 'UE',
    data () {
      return {
        editor: null
      }
    },
    props: {
      defaultMsg: {
        type: String
      },
      config: {
        type: Object
      }
    },
    mounted() {
      const _this = this;
      this.editor = UE.getEditor('editor', this.config); // 初始化UE
      this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
    },
    methods: {
      getUEContent() { // 获取内容方法
        return this.editor.getContent()
      }
    },
    destroyed() {
      this.editor.destroy();
    }
  }
</script>