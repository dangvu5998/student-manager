const Student = require('../models/student')
const khongdau = require('khong-dau')
module.exports = function(app) {
  //handle with student request
  app.get('/api/students/id/:id', function(req, res) {
    var id = Number(req.params.id)
    if(!Number.isInteger(id)) {
      return res.sendStatus(400)
    }
    // Student.find({studentId: id}, function(err, data) {
    //   if(err) {
    //     return res.sendStatus(500)
    //   }
    //   if(data){
    //     res.json(data)
    //   }
    //   else 
    //     res.sendStatus(404)
    // })
    handleQuery(req, res, {studentId: id})
  })

  app.get('/api/students/class/:class', function(req, res) {
    // Student.find({class: new RegExp('^'+req.params.class, 'i')}, function(err, data) {
    //   if(err) {
    //     return res.sendStatus(500)
    //   }
    //   res.json(data)
    // })
    handleQuery(req, res, {class: new RegExp('^'+req.params.class, 'i')})
  })

  app.get('/api/students/name/:name', (req, res) => {
    let name = khongdau(req.params.name).toLowerCase()
    name = name.split(' ').join('.*')
    let query = {nameSearch: new RegExp(name)}
    handleQuery(req, res, query)
  
  })
}

function handleQuery(req, res, query) {
  let docPerPage = 20
  let skip = 0, page = 1
  try{
    if(req.query.page) {
      page = parseInt(req.query.page)
      skip = (page - 1) * docPerPage
      
    }
  }
  catch(e) {
    return res.sendStatus(400)
  }
  let numDoc = Student.find(query).count()    
  let students = Student.find(query, {nameSearch: 0, _id: 0}).skip(skip).limit(docPerPage)
  Promise.all([numDoc, students])
  .then(value => {
    [numDoc, students] = value
    maxPage = Math.ceil(numDoc / docPerPage) || null
    res.json({maxPage, students, page})
  })
  .catch(e => res.sendStatus(500))

}