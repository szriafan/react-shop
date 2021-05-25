import * as types from '../actions/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_BY_ID_SUCCESS:
      if (action.data) {
        return {
          ...state,
          ...action.data,
        };
      }
    default:
      return state
  }
}
