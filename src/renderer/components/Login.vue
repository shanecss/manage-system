<template>
    <div class="Login">
        <div class="login_box">
            <div class="login_logo">
                <img src="../assets/images/logo.jpg" height="80" alt="">
            </div>
            <div class="login_inner">
                <!-- 扫描二维码 -->
                <div class="login_way01">
                    <p class="login_title">扫一扫登录</p>
                    <p class="size12">请使用 XXX APP 扫码登陆</p>
                    <img src="../assets/images/ewm.jpg" width="170" height="170" alt="二维码图片">
                    <el-button type="primary" plain>刷新二维码</el-button>
                </div>
                <!-- 账号密码登录 -->
                <div class="login_way02">
                    <p class="login_title title_center">账号密码登录</p>
                    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="login-ruleForm" style="width:100%;">
                        <el-form-item prop="account">
                            <el-input type="text" prefix-icon="el-icon-user" v-model="loginForm.account" placeholder="请输入账号" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item prop="pass">
                            <el-input type="password" prefix-icon="el-icon-lock" v-model="loginForm.pass" placeholder="请输入密码" autocomplete="off"></el-input>
                        </el-form-item>
                        <div class="login_pass">
                            <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
                            <p @click="toFindPass">忘记密码?</p>
                        </div>
                        <el-form-item>
                            <el-button type="primary" class="login_btn" @click="submitForm('loginForm')">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        var checkAccount = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入账号'));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        return{
            loginForm: {
                account: 'admin',
                pass: '123456789'
            },
            loginRules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                account: [
                    { validator: checkAccount, trigger: 'blur' }
                ]
            },
            checked:true
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                    this.$router.push({path:'/Index'});
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        toFindPass(){
            this.$router.push({path:'/RetrievePassword'});
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../assets/css/login.scss";  //引入方式
</style>