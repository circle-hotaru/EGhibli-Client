import ajax from './ajax'

const BASE_URL = '/api'

// 获取所有电影
export const reqGetAllFilm = () => ajax(BASE_URL + '/film/get')

// 搜索电影
export const reqSearchFilm = (filter) => ajax(BASE_URL + '/film/search', { filter })

// 获取所有角色
export const reqGetAllRole = () => ajax(BASE_URL + '/role/get')

// 搜索角色
export const reqSearchRole = (filter) => ajax(BASE_URL + '/role/search', { filter })