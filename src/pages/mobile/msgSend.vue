<template>
<div id="app">
  <div class="content-menu">
      <div class="menu-back" >          
        <a href="/#/mobile/message/index" style="color:#fff"><i class="el-icon-arrow-left"></i></a>
      </div>
  </div>


  <el-col :span="24" :offset="6" class="message-content">
    <div class="content-block">

      <el-form >
        <div align="right">
            <el-button v-on:click="cancel" >取 消</el-button>
            <el-button type="primary" style="background:#ff6f62;border:0;" v-on:click="send" >发 送</el-button>
        </div>

      <el-form-item label="标题">
        <el-input v-model="title" auto-complete="off" placeholder="请输入标题"></el-input>
      </el-form-item>

      
      <el-form-item label="正文">
        <el-input v-model="content" auto-complete="off" placeholder="请输入正文" type="textarea" :rows="5" ></el-input>
      </el-form-item>
  
      <el-form-item label="收件人" >    
        <el-tabs  class="a" activeName="first">
          <el-tab-pane label="班级" name="first">
            <el-table
              ref="multipleTable"
              :data="receiverClass"
              border
              tooltip-effect="dark"
              style="width: 100%"
              height="400"
              max-height="500"
              >
              <el-table-column
               label="课程编号"
                width="150"
              >
                <template scope="scope">
                  <el-checkbox :label="scope.row.class_id"  v-model="checkboxClass" ></el-checkbox>
                </template>
                
              </el-table-column>
              <!--<el-table-column
                prop="class_id"
                label="课程编号"
                width="100">
              </el-table-column>-->
              <el-table-column
                prop="class_name"
                label="课程名称"
                width="150">
              </el-table-column>
              <el-table-column
                prop="class_time"
                label="授课时间"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="class_address"
                label="授课地点"
                show-overflow-tooltip>
            </el-table-column>
          </el-table>
          </el-tab-pane>
          <el-tab-pane label="管理员" name="second">
            <el-table
            ref="multipleTable"
            :data="receiverAdmin"
            border
            tooltip-effect="dark"
            style="width: 100%"
            max-height="500"
            >
            <el-table-column
              type="selection"
              width="150">
              <template scope="scope">
                  <el-checkbox :label="scope.row.username"  v-model="checkboxAdmin" ></el-checkbox>
              </template>

            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>                            
            <el-table-column
              prop="email"
              label="联系方式">
            </el-table-column>
          </el-table>                      
        </el-tab-pane>
                <!--<el-tab-pane label="系统群发" name="third">-->
                    <!--<el-checkbox-group v-model="checkList" >
                        <el-checkbox v-for = "item in receiverSystem">{{item}}</el-checkbox>
                    </el-checkbox-group>-->
                <!--</el-tab-pane>-->
        <el-tab-pane label="其他" name="fourth">
          <el-row>
            <el-col :span="5">
              <el-input placeholder="请输入收件人用户名" icon="search" v-model="search"> </el-input>
            </el-col>
            <el-col :span="2">
              <el-button type="primary" style="background:#ff6f62;border:0;" v-on:click="addReceiver" >添加</el-button>
            </el-col>
          </el-row>
          <el-tag v-for="receiver in checkboxOther" :key="receiver.username" :closable="true" type="primary" @close="delReceiver(receiver)"> {{receiver.name}}</el-tag>
        </el-tab-pane>
        </el-tabs>    
    </el-form-item> 
  </el-form> 
</div>
</el-col>
</div>
</template>
<script>

  export default {
    
    data () {
      return {
        defaultMsg: '这里是UE测试',
        content:"",
        title:"",      
        receiverClass:[],
        receiverAdmin:[],
        receiverSystem:[],
        otherReceiver:[],
        
        checkboxClass:[],
        checkboxAdmin:[],
        checkboxOther:[],
      
        search: ''
      }
    },
    methods: {
      init () {
        this.$ajax.get('/message/receiver',{ params: { 'token': sessionStorage.getItem('token') }}
        ).then(data => {
          data = data.data
          this.receiverAdmin=data.receiverAdmin
          this.receiverClass=data.receiverClass
          if(data["receiverSystem"] != undefined) this.receiverSystem=data.receiverSystem
        
        })
      },
      cancel(){
        this.$router.push("/mobile/message/index")
      },
      
      send(){
     
        var tmp=[]
        for(let item of this.checkboxOther){
          tmp.push(item.id)
        }
        
        this.$ajax.post('/message/send',
          { 
           
              'token': sessionStorage.getItem('token') ,
              'checkboxClass':this.checkboxClass.join(","),
              'checkboxAdmin':this.checkboxAdmin.join(","),
              'checkboxOther':tmp.join(","),
              'title':this.title,
              'content':this.content
            
          }


        ).then(data => {
          data = data.data
          this.$message({message: data.msg, type : 'success'})  
          
        })


        
      },
      addReceiver(){
        this.$ajax.get('/message/userinfo?username=' + this.search
        ).then(data => {
          data = data.data
          console.log(data)
          if(data.code==1) { 
            this.checkboxOther.push({id: data.username, name: data.name })
            this.$message({message : '添加成功'+data.name, type : 'success'})  

          }
          else if(data.code==2) this.$message({message : '该用户没有绑定微信！', type : 'error'})  
          else this.$message({message : '该用户没有绑定微信！', type : 'error'})  
        })
        
      },
      delReceiver(tag){
        this.checkboxOther.splice(this.checkboxOther.indexOf(tag), 1);
      }
      
    },
    mounted(){
      this.init()
    }
    
   
  }
</script>