const mongoose = require('mongoose')
const khongdau = require('khong-dau')
const studentSchema = mongoose.Schema({
  studentId: {type: Number, required: true, unique: true, index:true},
  priName: { type: String, required: true},
  surName: { type: String },
  midName: { type: String },
  birth: { type: Date },
  class: { type: String, index:true },
  nameSearch: { type: String, default: ''},
  eduProgram:  { type: String }  
})
studentSchema.pre('save', function(next) {
  this.nameSearch = `${khongdau(this.surName)}${khongdau(this.midName).split(' ').join('')}${khongdau(this.priName)}`.toLowerCase();
  next()
})
studentSchema.pre('update', function(next) {
  this.nameSearch = `${khongdau(this.surName)}${khongdau(this.midName).split(' ').join('')}${khongdau(this.priName)}`.toLowerCase();
  next()
})

module.exports = mongoose.model('Student', studentSchema)
exports.studentSchema = studentSchema