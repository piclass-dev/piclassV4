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
          
      <button class="el-button el-button--primary button-huge" type="button" style="background:#ff6f62; border:0;" v-on:click=sendMsg ><span>新留言</span></button>

      <el-tabs activeName="inbox">
        <el-alert
          title="共 1 条未读"
          type="notification" style="background:#939393;">
        </el-alert>

        <el-tab-pane label="收件箱" name="inbox" >
          <div v-for="item in msgPerson">
            <div class="list-element"  v-on:click=showDetail(item.msg_id) >
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
          <div v-for="item in msgClass">
            <div class="list-element">
              <div class="element-title" v-on:click=showDetail(item.msg_id) >
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
            <div class="list-element" v-for="value in outboxData" >
                <div class="element-title">
                  {{value.title}}
                </div>
                <div class="element-sender">
                  {{value.receiver}}
                </div>
                <div class="element-senddate">
                    {{value.time}}
                </div>
                <div class="line"></div>
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
        activeName1: '',
        outboxData: [],
        msgClass:[],
        msgPerson:[],
        msgSystem:[],
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
        this.$ajax.get('/inbox',{ params: { 'token': sessionStorage.getItem('token') }}
        ).then(data => {
          data = data.data
          this.msgSystem=data.msgSystem
          this.msgClass=data.msgClass
          this.msgPerson=data.msgPerson       
          
        })
        this.$ajax.get('/outbox',{ params: { 'token': sessionStorage.getItem('token') }}
        ).then(data => {
          data = data.data
          this.outboxData=data
                   
        })


      },
      
    },
    mounted(){
      
      this.init()
    }
  }
</script>
