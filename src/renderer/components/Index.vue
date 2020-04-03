<template>
    <div class="Index">
        <!-- 头部组件 -->
        <q-header></q-header>
        <div class="qWrapper">
            <!-- 侧边栏菜单组件 -->
            <el-aside class="aside" width="200px">
                <el-row>
                    <el-col :span="24">
                        <el-cascader
                            v-model="value"
                            :options="options"
                            @change="handleChange">
                        </el-cascader>
                        <el-menu
                            router 
                            :default-active="this.$route.path"
                            background-color="#0553a1"
                            text-color="#ffffff"
                            active-text-color="#000000">
                            <template v-for="(item,index) in navData">
                            <el-menu-item :key=index :index="'/' + item.componentName">
                                <i class="el-icon-s-home"></i>
                                <span>{{item.name}}</span>
                            </el-menu-item>
                            </template>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <!-- 主体内容组件 -->
            <div class="qContainer">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
import qHeader from '@/components/qHeader'
import menu from '@/utils/nav-config.js'
export default {
    name:'Index',
    data(){
        return{
            navData:menu,
            value: [],
            options: [{
                value: 'company',
                label: '四特集团',
                children: [{
                    value: 'company01',
                    label: '四特营销集团',
                    children: [{
                        value: 'company0101',
                        label: '营销公司一'
                    }, {
                        value: 'company0102',
                        label: '营销公司二'
                    }]
                }, {
                    value: 'company02',
                    label: '四特东方韵',
                    children: [{
                        value: 'company0201',
                        label: '东方韵公司一'
                    }, {
                        value: 'company0202',
                        label: '东方韵公司二'
                    }]
                }]
            }]
        }
    },
    methods:{
        handleChange(value) {
            console.log(value);
        }
    },
    components:{
  		qHeader
  	}
}
</script>
<style lang="scss" scoped>
    .Index{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .qWrapper{
        display: flex; 
        flex-direction: row;
        height: 100%;
        overflow: hidden;
    }
    .el-aside{ 
        height: 100%;
        background:#0553a1; 
    }
    .el-menu{ 
        padding:20px 0; 
        border-right: none; 
        .el-menu-item{ 
            text-align: left; 
            margin-bottom: 1px; 
        }
    }
    .qContainer{ 
        height: 100%;
        flex:1; 
        background: $container-color;
        padding: 25px;
        overflow-y: scroll;
    }
</style>