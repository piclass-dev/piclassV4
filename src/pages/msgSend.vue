<template>
<div id="app">
  <topBar></topBar>
  <leftBlock></leftBlock>
  <el-col :span="18" :offset="6" class="message-content">
    <div class="content-block">

      <el-form :model="form">
        <div class="dialog-button">
            <el-button>取 消</el-button>
            <el-button type="primary" style="background:#ff6f62;border:0;">发 送</el-button>
        </div>

      <el-form-item label="标题">
        <el-input v-model="form.name" auto-complete="off" placeholder="请输入标题"></el-input>
      </el-form-item>

      <el-form-item label="">
      <p style="margin:0;">正文</p>
          
      </el-form-item>
      <ue></ue>

  
      <el-form-item label="收件人" >    
        <el-tabs v-model="activeName2" class="a">
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
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                prop="class_id"
                label="课程编号"
                width="100">
              </el-table-column>
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
              width="55">
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
            <el-input
            placeholder="请输入收件人用户名"
            icon="search"
            v-model="search2"
           >
          </el-input>
        </el-tab-pane>
        </el-tabs>    
    </el-form-item> 
  </el-form> 
</div>
</el-col>
</div>
</template>
<script>
import topBar from '../components/topBar.vue'
import leftBlock from '../components/leftBlock.vue'
  import ue from '../components/UE'
  export default {
    components: {
      ue: ue,
      topBar:topBar,
      leftBlock:leftBlock
    },
    data () {
      return {
       
        form: {
          name: '',
          receiver: '',
          text: ''

        },
        formLabelWidth: '100px',
        activeName1: 'inbox',
        activeName2: 'first',
        receiverClass:[],
        receiverAdmin:[],
        receiverSystem:[],
        checkList: [],
        search2: ''
      }
    },
    methods: {
      init () {
        this.$ajax.get('/receiver',{ params: { 'token': sessionStorage.getItem('token') }}
        ).then(data => {
          data = data.data
          this.receiverAdmin=data.receiverAdmin
          this.receiverClass=data.receiverClass
          if(data["receiverSystem"] != undefined) this.receiverSystem=data.receiverSystem
        
        })
      },
      search(){
        this.$ajax.get('/userinfo?username=' + this.search
        ).then(data => {
          this.userinfo = data.data
          console.log(data)
        })

      }
      
    },
    mounted(){
      this.init()
    }
    
   
  }
</script>