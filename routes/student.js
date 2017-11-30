const Student = require('../models/student')
const khongdau = require('khong-dau')
module.exports = function(app) {
  //handle with student request
  app.get('/api/students/id/:id', function(req, res) {
    var id = Number(req.params.id)
    if(!Number.isInteger(id)) {
      return res.sendStatus(400)
    }
    Student.find({studentId: id}, function(err, data) {
      if(err) {
        return res.sendStatus(500)
      }
      if(data){
        res.json(data)
      }
      else 
        res.sendStatus(404)
    })
  })

  app.get('/api/students/class/:class', function(req, res) {
    Student.find({class: new RegExp('^'+req.params.class, 'i')}, function(err, data) {
      if(err) {
        return res.sendStatus(500)
      }
      res.json(data)
    })
  })

  app.get('/api/students/name/:name', (req, res) => {
    let name = khongdau(req.params.name).toLowerCase()
    name = name.split(' ').join('.*')
    Student.find({nameSearch: new RegExp(name)}, (err, data) => {
      if(err) 
        return res.sendStatus(500)
      res.json(data)
    })
  })
}