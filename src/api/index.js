import ajax from './ajax'

// const BASE = `http://localhost:4000`
const BASE = '/api'
//接口文件
//请求主页list数据的接口
export const reqList = ()=>ajax.get('/list')

//请求分类列表数据
export const reqCategoryList = ()=>ajax({
  method:'GET',
  url:BASE +'/cateNav'
})

//请求分类item数据
export const reqListDates =()=>ajax({
  method:'GET',
  url:BASE+'/list'

})

//请求用户信息
export const reqUser = ()=>ajax({
  method:'GET',
  url:BASE+'/user'
})