//导入网络请求方法
import {getCategoryList} from '@/api/index'
//导入默认数据
import { topCategory } from '@/utils/contants';

export default {
    namespaced: true,//开启该模块的命名空间
    //默认值
    state: () => {
        return {
            cateList: topCategory//默认值数组：请求不到数据的时候显示
        }
    },
    //将后台得到的数据放到state中
    mutations:{
        setList(state,payload){
            state.cateList=payload;
        }
    },
    //向后台要分类数据
    actions:{
        async getAllCategory({commit}){
            //try包裹可能出现的错误，防止错误太多程序崩溃
            try{
                //getCategoryList()是异步操作，使用await就先执行异步操作，知道promise对象被解析成res响应对象
                const res = await getCategoryList();
                if(res.code==='200'){
                    commit('setList',res.data.cateList)//修改cateList中的数据
                }   
            } catch(error){
                console.log(error);
                
            }
            
        }
        }
    }

