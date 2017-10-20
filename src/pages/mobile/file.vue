
<template>
<div id="app" class="menu-wrapper">
    <div class="content-menu">
        <div class="menu-title">文件</div>
    </div>              
    <el-col :span="24" class="file-list" >
        <div class="searchbox">
            <el-input
                placeholder="搜索"
                icon="search"
                v-model="search"
                :on-icon-click="searchFile">
            </el-input>
        </div>
        <!--<div class="breadcrumb">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }"><i class="fa fa-home"></i></el-breadcrumb-item>
            <el-breadcrumb-item>文件</el-breadcrumb-item>

            </el-breadcrumb>
        </div>-->
        <div v-for="item in fileList">
            <div class="list-element" v-on:click="download(item)">
            <div class="file-icon" >
                
                <img :src="item.img" height=50px width=54px >
            </div>
            <div class="element-title">
                {{item.filename}}
            </div>
            <div class="element-createdate">
                {{item.time}}
            </div>
            <div class="line"></div>
            </div>
        </div>
        

</el-col> 

</div>  
</template>


<script>
import '../../../static/css/style-mb.css'
export default {

    data() {
        return {
            fileList:[],
            search:""
        }
    },
    methods: {
        searchFile(tab, event) {
        console.log(tab, event);
        },
       init(){
            this.$ajax.get('/file/classFile',
                { params: { 
                    'token': sessionStorage.getItem('token'),
                    'class_id':this.$route.query.class_id
                }}
            ).then(data => {
            data = data.data
            this.fileList=data.fileList   
            for(let item of this.fileList){
                item.img="../../../static/img/"+item.type
                
            }
             
            
        })    
        
       },
       download(item){
           var url="http://piclass.cn/media/file/"+item.class_id+"/"+item.username.username+"/"+item.filename
           window.location.href=url

       }

    },
    mounted(){
        this.init()
    }
}
        
  </script>

