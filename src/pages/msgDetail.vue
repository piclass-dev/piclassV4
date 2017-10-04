
<template>
<div id="app">
  <topBar></topBar>
  <leftBlock></leftBlock>
  <el-col :span="18" :offset="6" class="message-content">
    <div class="content-block" style="border-bottom:solid 3px #ccc" >
      <div class="content-title">
        <p>{{tableData6.title}}</p>
      </div>
      <div class="content-avatar">
        <img src="../assets/avatar.png" height="50px">
      </div>
      <div class="content-sender">
        {{tableData6.username.name}}</p>
      </div>
      <div class="content-senddate">
        <p>xxxx/xx/xx</p>
      </div>
                           
    </div>
    <div class="content-text">
        <p v-html="tableData6.content"></p>
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
        tableData6: [],
        }
  },
  methods: {
      showMsgDetail(){
        
        this.$ajax.get('/detail?msg_id=' +this.$route.query.id
        ).then(data => {
          this.tableData6 = data.data
        })
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