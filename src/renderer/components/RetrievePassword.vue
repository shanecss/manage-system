<template>
    <div class="findPass">
        {{msg}}
        <el-button @click="toLogin">返回登录</el-button>
    </div>
</template>
<script>
export default {
    name:'RetrievePassword',
    data(){
        return{
            msg:'找回密码页'
        }
    },
    methods:{
        toLogin(){
            this.$router.push({path:'/Login'});
            //this.$router.back(-1);//返回上一层
        }
    }
}
</script>
<style lang="scss" scoped>

</style>