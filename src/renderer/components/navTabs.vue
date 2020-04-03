<template>
    <div class="navTabs">
        <!-- 标签页 -->
        <el-tabs 
            v-model="editableTabsValue" 
            type="card" 
            closable 
            @tab-remove="removeTab"
            @tab-click="handleClickTab($event.name)">
            <el-tab-pane
                :key="item.name"
                v-for="item in editableTabs"
                :label="item.title"
                :name="item.name">
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
            editableTabsValue: 'index', //表示当前哪个标签处于激活状态
            editableTabs: [{
                title: 'index',
                name: 'index'
            }], //用于保存所有标签
            tabIndex: 1,
            openedTab: ['index'] //用于保存打开过的标签
        }
    },
    methods:{
        //点击标签时，触发changeTab事件，切换至相应路由
        handleClickTab (route) {
            this.$store.commit('changeTab', route)
            this.$router.push(route)
        },
        //点击标签上的x时触发，关闭该标签
        //触发deduct方法，跳转至合适的标签并激活
        //若已经没有标签了，则打开index
        removeTab (targetName) {
            let tabs = this.editableTabs
            let activeName = this.editableTabsValue
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1]
                        if (nextTab) {
                            activeName = nextTab.name
                        }
                    }
                })
            }
            this.$store.commit('deductTab', targetName)
            let deductIndex = this.openedTab.indexOf(targetName)
            this.openedTab.splice(deductIndex, 1)
            this.$router.push(activeName)
            this.editableTabsValue = activeName
            this.editableTabs = tabs.filter(tab => tab.name !== targetName)
            if (this.openedTab.length === 0) {
                this.$store.commit('addTab', 'index')
                this.$router.push('index')
            }
        }
    },
    //监控store中openedTab和activeTab的变化并相应的改变标签栏中的标签状态
    computed: {
        getOpenedTab () {
            return this.$store.state.openedTab
        },
        changeTab () {
            return this.$store.state.activeTab
        }
    },
    watch: {
        getOpenedTab (val) {
            if (val.length > this.openedTab.length) {
                // 添加了新的tab页
                // 导致$store.state中的openedTab长度
                // 大于
                // 标签页中的openedTab长度
                // 因此需要新增标签页
                let newTab = val[val.length - 1] // 新增的肯定在数组最后一个
                ++this.tabIndex
                this.editableTabs.push({
                    title: newTab,
                    name: newTab,
                    content: ''
                })
                this.editableTabsValue = newTab
                this.openedTab.push(newTab)
            }
        },
        changeTab (val) {
            // 监听activetab以实现点击左侧栏时激活已存在的标签
            if (val !== this.editableTabsValue) {
                this.editableTabsValue = val
            }
        }
    },
    created () {
        // 刷新页面时（F11)
        // 因为<router-view>的<keep-alive>，会保留刷新时所在的router
        // 但是tab标签页因为刷新而被重构了，tab没有了
        // 因此需要将router回到index
        this.$router.push('index')
    }
}
</script>
<style lang="scss" scoped>

</style>