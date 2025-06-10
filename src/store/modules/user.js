export default {
    namespaced: true,//开启该模块的命名空间
    state: () => {
        return {
            userinfo: {
                token: "123",
                username: "美京"
            }

        }
    },
    mutations:{
        updateName(state,payload){
            state.userinfo.username=payload;
        }
    },
    actions:{
        updateNameAsync({commit},payload){
            setTimeout(()=>{
                commit("updateName",payload)
            },2000)
        }
    }

}