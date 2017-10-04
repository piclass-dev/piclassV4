<template>
<div class="app">
  <div style="height:100px"></div>
<el-row>
  <el-col :span="8">
    &nbsp;
  </el-col>
  <el-col :span="8">
   <el-input v-model="token" placeholder="请输入token"><template slot="prepend">Token</template></el-input>
   <div style="height:20px"></div>
   <el-input v-model="url" placeholder="请输入跳转页面"><template slot="prepend">URL</template></el-input>
   <div style="height:20px"></div>
   <el-button type="primary" @click="check()">主要按钮</el-button>
  </el-col>

</el-row>
</div>
</template>

<script type="text/javascript">  

export default {
  data(){
    return {  
      token: "iFI2Z1xpcVutQsjtYVBifzIFoLI+iRJbPPCExCHNUClrnlMmRF9X5hcnFrIesRBl9kkcW32wD6l4ln5mk0Z7bcGwGU31iSGh1BzU7ulrc1k=",
      url : "/message/send"
    }
  },
  methods:{
    check(){
      
      sessionStorage.setItem("token",this.token);
      this.$router.push(this.url)
    }
  }
 
}

</script>