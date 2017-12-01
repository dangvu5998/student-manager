import { put, call, takeLatest, all } from 'redux-saga/effects'
import * as api from '../services'
import * as types from '../actions/types'
export function* fetchStudents(action) {
  try {
    let data
    switch(action.key) {
      case 'id': data = yield call(api.fetchStudentById, action.val)
      break
      case 'class': data = yield call(api.fetchStudentByClass, action.val, action.page)
      break
      case 'name': data = yield call(api.fetchStudentByName, action.val, action.page)
      break
      default: data = yield null
    }
    
    yield put({type: types.FETCH_STUDENT_SUCCESS, ...data})
  }
  catch(e) {
    yield put({type: types.FETCH_STUDENT_FAILURE, error: e})
  }
}

export function* watchFetch() {
 yield takeLatest(types.FETCH_STUDENT_REQUEST, fetchStudents)
}

export default function* rootSaga() {
  yield all([
    watchFetch()
  ])
}