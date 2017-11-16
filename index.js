const mongoose = require('mongoose')
const express = require('express')

const app = express()
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.DB_URI)


require('./routes/student')(app)
app.listen(process.env.PORT)