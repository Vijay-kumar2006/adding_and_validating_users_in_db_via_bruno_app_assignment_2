const mongoose = require('mongoose')

const userSchema = new mongoose.schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    requireed:true,
    unique:true 
  },
  password:{
    type:String,
    required:true
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User