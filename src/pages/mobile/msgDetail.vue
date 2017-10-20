<template>
<div id="app">
    <div class="content-menu">
          <div class="menu-back" >          
            <a href="/#/mobile/message/index" style="color:#fff"><i class="el-icon-arrow-left"></i></a>
          </div>
    </div>

  
  <el-col :span="24" :offset="6" class="message-content">
    <div class="content-block" style="border-bottom:solid 3px #ccc" >
      <div class="content-title">
        <p>{{msg.title}}</p>
      </div>
      <div class="content-avatar">
        <img src="../../assets/avatar.png" height="50px">
      </div>
      <div class="content-sender">
        {{msg.username}}</p>
      </div>
      <div class="content-senddate">
        <p>{{msg.time}}</p>
      </div>
                           
    </div>
    <div class="content-text">
        <p v-html="msg.content"></p>
      </div>
  </el-col>
</div>
</template>
<script>

  import '../../../static/css/style-mb.css'
export default {
 
  data () {
      return {
        msg: [],
        }
  },
  methods: {
      showMsgDetail(){
        
        this.$ajax.get('/message/detail?id=' +this.$route.query.id,
        
        ).then(data => {
          this.msg = data.data
        })
        this.$refs.leftBlock.init()
      }
  },
  
  mounted(){
    this.showMsgDetail()
  }
}
</script>