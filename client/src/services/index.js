import axios from 'axios'
function handleGet(url, params = {}) {
  return axios.get(url, {params: params})
  .then(res => {
    if(res.status >= 200 && res.status < 300) {
      return Promise.resolve(res.data)
    }
    else
      return Promise.reject(res.statusText)   
  })
}
export function fetchStudentById(id) {
  if(id)
    return handleGet(`/api/students/id/${id}`)
  else
    return Promise.reject(new Error('Bad request'))

}
export function fetchStudentByClass(studentClass, page) {
  let params = {}
  if(page)
  params.page = page
  if(studentClass) 
    return handleGet(`api/students/class/${studentClass}`, params)
  else
    return Promise.reject(new Error('Bad request'))
}

export function fetchStudentByName(name, page) {
  let params = {}
  if(page)
  params.page = page
  if(name)
  return handleGet(`api/students/name/${name}`, params)
  else
  return Promise.reject(new Error('Bad request'))
}