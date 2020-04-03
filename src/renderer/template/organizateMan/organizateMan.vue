<template>
    <div class="organizateMan">
        <!-- 头部组件 -->
        <q-header></q-header>
        <div class="iContent">
            {{msg}}
            <el-button type="primary" plain @click="toBack">主要按钮</el-button>
        </div>
    </div>
</template>
<script>
import qHeader from '@/components/qHeader'
export default {
    name:'organizateMan',
    data(){
        return{
            msg:'organizateMan'
        }
    },
    methods:{
        toBack(){
            this.$router.push({path:'/serviceSystem'});
        }
    },
    components:{
  		qHeader
  	}
}
</script>
<style lang="scss" scoped>
    
</style>