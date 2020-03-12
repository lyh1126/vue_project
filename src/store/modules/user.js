
import {reqUser} from '../../api'
import { Toast } from 'mint-ui';
import {SAVE_USER} from '../mutaions-type'

const state = {
  user:{}
}
const mutations={
  [SAVE_USER](state,user){
    state.user = user
  }
}
const actions = {
  async getUser({commit}){
    const result =  await reqUser()
    if(result.code === 0){
      //请求成功
      const {user,token} = result.datas
      commit(SAVE_USER,user)
      
      localStorage.setItem('user_token',token)
    }else{
      //请求失败
      Toast('网络异常')
    }
  } 
}

const getters ={

}

export default {
  state,
  mutations,
  actions,
  getters
}