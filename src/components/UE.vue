<template>
 <div align="center">
     <script id="editor" type="text/plain" style="width:100%;height:300px;" name="content"></script>
 </div>
</template>
<script>
// export default {
//   mounted(){
//      this.UE = UE.getEditor('editor')
//   }
// }      
//   export default {
//     name: 'UE',
//         props: {
//           editorcontent: {
//             type: String,
//             default: '123421'
//           }
//         },
//         data () {
//           return {
//             UE: '',
//             content:"",
//           }
//         },
//         mounted () {
//           setTimeout(() => {
//             this._initEditor()
//           }, 500)
//         },
//         methods: {
//           _initEditor () {
//             this.UE = UE.getEditor('editor')
//             this.UE.addListener('contentChange', () => {
//             this.$emit('edithavecontent', this.UE.getContent())
//             })
//           },
//           getUEContent() { // 获取内容方法
//         return this.UE.getContent()
//       }

//         },
//         // computed:{
//         //   content:function(){return this.UE.getContent() }
//         // },
//         watch: {
//           editorcontent: function (val) {
//             UE.getEditor('editor').ready(() => {
//               if (val) {
//                 this.UE.setContent(val)
//               } else {
//                 this.UE.setContent('')
//               }
//             })
//           }
//         },
//         beforeDestroy () {
//           if (this.UE !== null && this.UE.destroy) {
//             this.UE.destroy()
//           }
//         }
//       }
// </script>

<script>
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