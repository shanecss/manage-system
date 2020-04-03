<template>
    <div class="iHeader">
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
        <!-- 标签页 -->
        <el-tabs v-model="editableTabsValue" type="card" closable @edit="handleTabsEdit">
            <el-tab-pane
                :key="item.name"
                v-for="item in editableTabs"
                :label="item.title"
                :name="item.name">
            </el-tab-pane>
        </el-tabs>
        <!-- 标签页 -->
        <!-- <nav-Tabs></nav-Tabs> -->
    </div>
</template>
<script>
import navTabs from '@/components/navTabs'
export default {
    name:'Header',
    data(){
        return{
            editableTabsValue: '2',
            editableTabs: [{
                title: '导航菜单',
                name: '1',
                content: 'Tab 1 content'
            }, {
                title: '公共服务系统',
                name: '2',
                content: 'Tab 2 content'
            }],
            tabIndex: 2
        }
    },
    methods:{
        toLogin(){
            this.$router.push({path:'/Login'});
            //this.$router.back(-1);//返回上一层
        },
        handleTabsEdit(targetName, action) {
            if (action === 'add') {
                let newTabName = ++this.tabIndex + '';
                this.editableTabs.push({
                    title: 'New Tab',
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.editableTabsValue = newTabName;
            }
            if (action === 'remove') {
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
            }
        }
    },
    components:{
  		navTabs
  	}
}
</script>
<style lang="scss" scoped>
    .el-header{ 
        @extend .flex_row;
        @extend .index-logo;
    }
    .iInfo{
        margin-right: 30px;
        ul{
            @include flex_layout(row);
            li{
                color: #fff; 
                margin-left: 25px; 
            }
        }
    }
    .iInfo ul li.qExit:hover{ 
        cursor: pointer; 
        color: rgba(255,255,255,.8); 
    }
</style>