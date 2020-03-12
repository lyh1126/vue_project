import {SAVE_MSITELIST} from '../mutaions-type'
import {reqList} from '../../api'
import { Toast } from 'mint-ui';

const state={
  list:[]
}
const mutations = {
  [SAVE_MSITELIST](state,list){
    state.list = list
  } 
}
const actions = {
  async getList({commit}){
    const result = await reqList()
    if(result.code === 0){
      const data = result.data
      commit(SAVE_MSITELIST,data)
    }else{
      Toast('网络异常')
    }
  }
}
const getters={}

export default{
  state,
  mutations,
  actions,
  getters
}