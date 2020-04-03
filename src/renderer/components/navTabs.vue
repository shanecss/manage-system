<template>
    <div class="navTabs">
        <!-- 标签页 -->
        <el-tabs 
            v-model="editableTabsValue" 
            type="card"  
            @tab-remove="removeTab"
            @tab-click="handleClickTab($event.name)">
            <el-tab-pane
                :key="item.name"
                v-for="item in editableTabs"
                :label="item.title"
                :name="item.name"
                :closable="item.close">
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name:'navTabs',
    data(){
        return{
            editableTabsValue: 'Index', //表示当前哪个标签处于激活状态
            editableTabs: [{
                title: '功能导航',
                name: 'Index',
                close:false
            },{
                title: '测试标签页02',
                name: 'organizateMan',
                close:true
            }] //用于保存所有标签
        }
    },
    methods:{
        removeTab(targetName){
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }    
            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        },
        handleClickTab(name){
            //激活当前点击的tabs
            this.editableTabsValue = name;
            //点击tabs触发路由跳转，到相应路由
            this.$router.push(name);
        }
    }
}
</script>
<style lang="scss" scoped>

</style>