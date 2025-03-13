const bcrypt = require('bcrypt')
const User = require('./schema')

const postdata = async(req, res)=>{
  const {email, password} = req.body
  if(!email|| !password){
    return res.status(400).json({message:"All the fields are required"})
  }
  try{
    const user = await User.findOne({email:email})

    if(!user){
      return res.status(400).json({message:"Invalid User"})
    }
    const isCheck = await bcrypt.compare(password, user.password)

    if(!isCheck){
      return res.status(400).json({message:"User do not match"});
    }
    return res.status(200).json({message:"Login successful"})
  }catch(err){
    res.status(500).json({ message: 'Server error', error: error.message });
    console.log("error", err);
  }
}
module.exports = postdata;
