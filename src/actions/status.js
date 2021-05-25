import * as types from './actionTypes'

export const startLoad = () => ({
  type: types.PRELOAD,
  message: '正在加载',
  code: -1
})

export const endLoad = () => ({
  type: types.LOADED,
  message: '加载成功',
  code: 1
})

export const handleError = message => ({
  type: types.ERROR,
  message,
  code: 0
})
