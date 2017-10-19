<template>
    <div>
    <el-col :span="6" class="message-list" >
      <div class="searchbox">
        <el-input
          placeholder="搜索"
          icon="search"
          v-model="search"
          :on-icon-click="handleIconClick"
        >

        </el-input>
      </div>
          
      <button class="el-button el-button--primary button-huge" type="button" style="background:#ff6f62; border:0;" @click="sendMsg" ><span>新留言</span></button>

      <el-tabs activeName="inbox">
        <el-alert
          :title="unread"
          type="notification" style="background:#939393;">
        </el-alert>

        <el-tab-pane label="收件箱" name="inbox" >
          <div v-for="item in inboxData">
            <div class="list-element"  v-on:click=showDetail(item.id) >
              <div class="element-title">
                {{item.title}}
              </div>
              <div class="element-sender">
                {{item.username.name}}
              </div>
              <div class="element-senddate">
                {{item.time}}
              </div>
              <div class="line"></div>
            </div>
          </div>
          
        </el-tab-pane>
        

        <el-tab-pane label="已发送" name="outbox">
           <div v-for="item in outboxData">
            <div class="list-element" v-on:click=showDetail(item.id)  >
              <div class="element-title">
                {{item.title}}
              </div>
              <div class="element-sender">
                {{item.receiver}}
              </div>
              <div class="element-senddate">
                {{item.time}}
              </div>
              <div class="line"></div>
            </div>
          </div>
            
        </el-tab-pane>               
      </el-tabs>

    </el-col> 
    </div>
</template>
<script>
  import '../../static/message.css'
  
  export default {
    data () {
      return {
        search: '',
        unread:"",
        activeName1: '',
        outboxData: [],
        inboxData: [],
        tableData6: [],
     
      }
    },
    methods: {
      sendMsg(){
        this.$router.push('/message/send')
      },
      showDetail(id){
        
        // this.$emit('showMsgDetail', id)
        this.$router.push("/message/detail?id="+id)
        
      },
      handleIconClick(){},
      init () {
        this.$ajax.get('/message/inbox',{ params: { 'token': sessionStorage.getItem('token') }}
        ).then(data => {
          data = data.data
          this.inboxData=data.inbox    
          this.unread="共 "+data.unread+" 条消息未读"
          
        })
        this.$ajax.get('/message/outbox',{ params: { 'token': sessionStorage.getItem('token') }}
        ).then(data => {
          data = data.data
          this.outboxData=data.outbox
                   
        })


      },
      
    },
    mounted(){
      
      this.init()
    }
  }
</script>
