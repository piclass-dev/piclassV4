<template>
    <div class="app">
        <div class="header">
            <el-menu  theme="dark" style="background:#424147;" class="el-menu-demo" mode="horizontal" @select="handleOpen"  >
                <div class="header-logo">
                    <img src="../assets/logo.png" height="25">            
                </div>
                <div class="header-option">
                    <el-menu-item index="http://piclass.cn" >主页</el-menu-item>
                    <!--<el-menu-item index="/123">总览</el-menu-item>
                    <el-menu-item index="3">作业</el-menu-item>
                    <el-menu-item index="4">点名</el-menu-item>
                    <el-menu-item index="5">文件</el-menu-item>
                    <el-menu-item index="6">留言</el-menu-item>-->
                </div>
                <div class="header-avatar">
                    <el-dropdown>
                      <img src="../assets/avatar.png" height="30">
                      <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>Piclass</el-dropdown-item>
                          <el-dropdown-item divided>切换课程</el-dropdown-item>
                          <el-dropdown-item>注销</el-dropdown-item>
    
                        </el-dropdown-menu>   
                    </el-dropdown>
                </div>                             
            </el-menu>
          </div>
    </div>
</template>
<style>
    body{
        margin: 0;
    }
    .header{
    border-radius: 0px;
    background: #424147;
}

.header-logo{
    position:fixed; 
    margin:17px 20px
}

.header-option{
    margin-left:150px
}
.header-avatar{
    float:right;
    margin:13px 20px
}

</style>
<script>
export default {
    data () {
        return {
            activeIndex: '6'
        }
    },
    methods:{
        handleOpen(key,keyPath){
            window.location.href=key
        }
    }
    
}

</script>