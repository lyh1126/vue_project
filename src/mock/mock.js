import Mock from 'mockjs'
import data from './datas/list.json'

Mock.mock('/list',{code:0,data:data.List})