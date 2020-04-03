const state = {
    id: '123456',
    openedTab: ['index'],
    activeTab: ''
};
 
const getters = {
    
};
const mutations = {
    addTab (state, componentName) {
        console.log(componentName)
        state.openedTab.push(componentName)
    },
    changeTab (state, componentName) {
        console.log(componentName)
        state.activeTab = componentName
    },
    deductTab (state, componentName) {
        console.log(componentName)
        let index = state.openedTab.indexOf(componentName)
        state.openedTab.splice(index, 1)
    }
};
const actions = {
    
};
export default {
    state,
    getters,
    actions,
    mutations,
}