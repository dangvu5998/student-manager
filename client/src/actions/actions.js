import * as types from './types'
export function fetchStudentsById(id) {
  return {
    type: types.FETCH_STUDENT_REQUEST,
    key: 'id',
    id
  }
}

export function fetchStudentsByClass(className) {
  return {
    type: types.FETCH_STUDENT_REQUEST,
    key: 'class',
    className
  }
}

export function fetchStudentsByName(name) {
  return {
    type: types.FETCH_STUDENT_REQUEST,
    key: 'name',
    name
  }
}