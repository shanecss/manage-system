<template>
    <div class="Login">
        <div class="login_box">
            <div class="login_logo">XXX管理服务平台</div>
            <div class="login_inner">
                <!-- 扫描二维码 -->
                <div class="login_way01">
                    <p>扫一扫登录</p>
                </div>
                <!-- 账号密码登录 -->
                <div class="login_way02">
                    <p>账号密码登录</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
    @import "../assets/css/login.scss";  //引入方式
</style>