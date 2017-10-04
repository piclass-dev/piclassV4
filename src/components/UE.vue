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
  export default {
    name: 'UE',
        props: {
          editorcontent: {
            type: String,
            default: ''
          }
        },
        data () {
          return {
            UE: ''
          }
        },
        mounted () {
          setTimeout(() => {
            this._initEditor()
          }, 500)
        },
        methods: {
          _initEditor () {
            this.UE = UE.getEditor('editor')
            this.UE.addListener('contentChange', () => {
              this.$emit('edithavecontent', this.UE.getContent())
            })
          }
        },
        watch: {
          editorcontent: function (val) {
            UE.getEditor('editor').ready(() => {
              if (val) {
                this.UE.setContent(val)
              } else {
                this.UE.setContent('')
              }
            })
          }
        },
        beforeDestroy () {
          if (this.UE !== null && this.UE.destroy) {
            this.UE.destroy()
          }
        }
      }
</script>