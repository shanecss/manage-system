<template>
    <div class="serviceSystem">
        <div class="sms-item" v-for="(item,index) in navChild" :key=index>
            <p @click="toPage(item.componentName)">{{item.name}}</p>
            <ul>
                <li 
                    v-for="(item,num) in item.sub" 
                    :key=num  
                    @click="toPage(item.componentName)">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import menu from '@/utils/nav-config.js'
export default {
    name:'serviceSystem',
    data(){
        return{
            navData:menu,
            navChild:[],
            msg:'serviceSystem'
        }
    },
    created(){
        this.getDataChild()
    },
    methods:{
        getDataChild(){
            for(var i = 0;i < this.navData.length;i++){
                var item = this.navData[i]
                if(item.id == 'basic'){
                    this.navChild =item.sub
                }
            }
        },
        toPage(valuePath){
            this.$router.push({path:valuePath});
        },
    }
}
</script>
<style lang="scss" scoped>
    @import "../../assets/css/catalogList.scss";  //引入方式
</style>