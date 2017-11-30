function handleGet(url, opt = {method: 'GET'}) {
  return fetch(encodeURI(url), opt)
  .then(res => {
    if(res.status >= 200 && res.status < 300)
      return Promise.resolve(res.json())
    else
      return Promise.reject(res.statusText)   
  })
}
export function fetchStudentById(id) {
  if(id)
    return handleGet(`api/students/id/${id}`)
  else
    return Promise.reject(new Error('Bad request'))

}
export function fetchStudentByClass(studentClass) {
  if(studentClass) 
    return handleGet(`api/students/class/${studentClass}`)
  else
    return Promise.reject(new Error('Bad request'))
}

export function fetchStudentByName(name) {
  if(name)
  return handleGet(`api/students/name/${name}`)
  else
  return Promise.reject(new Error('Bad request'))
}