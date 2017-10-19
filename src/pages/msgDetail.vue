<template>
<div id="app">
  <topBar ></topBar>
  <leftBlock ref="leftBlock"></leftBlock>
  <el-col :span="18" :offset="6" class="message-content">
    <div class="content-block" style="border-bottom:solid 3px #ccc" >
      <div class="content-title">
        <p>{{msg.title}}</p>
      </div>
      <div class="content-avatar">
        <img src="../assets/avatar.png" height="50px">
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
import topBar from '../components/topBar.vue'
import leftBlock from '../components/leftBlock.vue'
// import '../../../static/message.css'
export default {
  components: {
    'topBar': topBar,
    'leftBlock': leftBlock
  },
  data () {
      return {
        msg: [],
        }
  },
  methods: {
      showMsgDetail(){
        
        this.$ajax.get('/message/detail?id=' +this.$route.query.id,
        { params: { 'token': sessionStorage.getItem('token') }}
        ).then(data => {
          this.msg = data.data
        })
        this.$refs.leftBlock.init()
      }
  },
  computed:{
    msg_id:function(){return this.$route.query.id }
    //this.showMsgDetail()  
  },
  watch: {
    msg_id:function(){
      //alert(this.$route.query.id)
      this.showMsgDetail()
    }
  },
  mounted(){
    this.showMsgDetail()
  }
}
</script>