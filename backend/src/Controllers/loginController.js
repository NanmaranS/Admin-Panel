 import RegisterModel from '../Models/registerModel.js'
 import bcrypt from 'bcrypt'
 import jwt from 'jsonwebtoken'
export async function login (req,res){
try {
const {username,password,email}=req.body

if(!username||!password) return res.json("username and password cannot be empty")
if(!email) return res.status(400).json("email cannot be empty")

const existUser=await RegisterModel.findOne({username,email})
if(!existUser) return res.status(400).json("username,password,email not match")

const existPass=await bcrypt.compare(password,existUser.password)
if(!existPass) return res.status(400).json("username,password,email not match")


const token=jwt.sign(
    { userId:existUser._id,role: existUser.role},process.env.JWT_SECRET,{expiresIn:"10d"}

)

res.json({msg:"Login Successfully","token":token,"role":existUser.role})


}catch (error) {
    res.status(400).json({msg:error.message})
}
}