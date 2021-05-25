import * as types from '../actions/actionTypes'

export default (state = {
  message: '',
  code: 1
}, action) => {
  switch (action.type) {
    case types.PRELOAD:
      return {
        ...state,
        message: '正在加载',
        code: -1
      }
    case types.LOADED:
      return {
        ...state,
        message: '加载成功',
        code: 1
      }
    case types.ERROR:
      return {
        ...state,
        message: action.message,
        code: 0
      }
    default:
      return state
  }
}

