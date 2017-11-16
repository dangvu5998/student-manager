var Student = require('../models/student')
module.exports = function(app) {
  //handle with student request
  app.get('/api/student/id/:id', function(req, res) {
    var id = Number(req.params.id)
    if(!Number.isInteger(id)) {
      res.sendStatus(400)
      return
    }
    Student.findOne({studentId: id}, function(err, data) {
      if(err) {
        res.sendStatus(500)
        return
      }
      if(data){
        res.json(data)
      }
      else 
        res.sendStatus(404)
    })
  })

  app.get('/api/students/class/:class', function(req, res) {
    Student.find({class: req.params.class}, function(err, data) {
      if(err) {
        return res.sendStatus(500)
      }
      res.json(data)
    })
  })
}