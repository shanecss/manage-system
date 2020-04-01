<template>
    <div class="Index">
        <!-- 头部组件 -->
        <el-header height="70px" class="header">
            <img src="../assets/images/logo-02.jpg" height="70" alt="">
            <div class="iInfo">
                <ul>
                    <li>
                        <i class="el-icon-user"></i>
                        <span>管理员</span>
                    </li>
                    <li class="qExit">
                        <i class="el-icon-switch-button"></i>
                        <span @click="toLogin">安全退出</span>
                    </li>
                </ul>
            </div>
        </el-header>
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
                            :default-active="$route.matched[0].path"
                            background-color="#0553a1"
                            text-color="#ffffff"
                            active-text-color="#000000">
                            <el-menu-item index="/serviceSystem">
                                <i class="el-icon-s-home"></i>
                                <span>公共服务系统</span>
                            </el-menu-item>
                            <el-menu-item index="/otherSystem">
                                <i class="el-icon-user-solid"></i>
                                <span>系统二</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <!-- 主体内容组件 -->
            <div class="qContainer">
                <!--其他跳转内页集合 有过渡效果-->
                <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Index',
    data(){
        return{
            "enterAnimate": "", //页面进入动效
            "leaveAnimate": "", //页面离开动效
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
        toLogin(){
            this.$router.push({path:'/Login'});
            //this.$router.back(-1);//返回上一层
        },
        handleChange(value) {
            console.log(value);
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../assets/css/style.scss";  //引入方式
</style>