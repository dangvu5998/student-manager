import * as types from '../actions/types'
import {combineReducers} from 'redux'
const initialState = {
  status: {
    fetching: false,
    error: false,
    key: null,
    value: null
  },
  students: {
    list: [],
    page: null,
    maxPage: null
  }
}
function checkoutStatus(state = initialState.status, action) {
  switch(action.type){
    case types.FETCH_STUDENT_REQUEST: 
    return {
      ...state,
      fetching: true,
      error: null,
      key: action.key,
      val: action.val
    }
    case types.FETCH_STUDENT_SUCCESS:
    return {
      ...state,
      fetching: false,
      error: null,
    }
    case types.FETCH_STUDENT_FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.error
    }
    default:
    return state

  }
}

function students(state = initialState.students, action) {
  console.log(state)
  switch(action.type) {
    case types.FETCH_STUDENT_SUCCESS:
    return {
      ...state,
      list: action.students,
      page: action.page || state.page,
      maxPage: action.maxPage || state.maxPage
    }
    case types.FETCH_STUDENT_REQUEST: 
    case types.FETCH_STUDENT_FAILURE:
    return initialState.students
    default:
    return state
  }
}

const reducerRoot = combineReducers({
  checkoutStatus,
  students
})
export default reducerRoot
