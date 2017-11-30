import { put, call, fork, takeEvery, takeLatest, all } from 'redux-saga/effects'
import * as api from '../services'
import * as types from '../actions/types'
export function* fetchStudents(action) {
  try {
    let studentList
    switch(action.key) {
      case 'id': studentList = yield call(api.fetchStudentById, action.id)
      break
      case 'class': studentList = yield call(api.fetchStudentByClass, action.className)
      break
      case 'name': studentList = yield call(api.fetchStudentByName, action.name)
      break
      default: studentList = yield []
    }
    yield put({type: types.FETCH_STUDENT_SUCCESS, studentList})
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