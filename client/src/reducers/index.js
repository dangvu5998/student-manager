import * as types from '../actions/types'
import {combineReducers} from 'redux'
const initialState = {
  status: {
    fetching: false,
    error: false
  },
  studentList: []
}
function checkoutStatus(state = initialState.status, action) {
  switch(action.type){
    case types.FETCH_STUDENT_REQUEST: 
    return {
      fetching: true,
      error: null
    }
    case types.FETCH_STUDENT_SUCCESS:
    return initialState.status
    case types.FETCH_STUDENT_FAILURE:
    return {
      fetching: false,
      error: action.error
    }
    default:
    return state

  }
}

function studentList(state = initialState.studentList, action) {
  switch(action.type) {
    case types.FETCH_STUDENT_SUCCESS:
    return action.studentList
    case types.FETCH_STUDENT_REQUEST: 
    case types.FETCH_STUDENT_FAILURE:
    return []
    default:
    return state
  }
}

const reducerRoot = combineReducers({
  checkoutStatus,
  studentList
})
export default reducerRoot
