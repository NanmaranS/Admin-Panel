 import RegisterModel from '../Models/registerModel.js'
import bcrypt from 'bcrypt'

export async function register (req,res){
 try {
  const {username,email,password}=req.body

  if(!username || !email) return res.status(400).json("username and email is cannot be empty")
  if(!password) return res.status(400).json("password cannot be empty")

  const findexistUser=await RegisterModel.findOne({username}) 
  if(findexistUser) return res.status(400).json("username aldready taken") 

  const hashPass=await bcrypt.hash(password,10)
  const register=await RegisterModel.create({username,email,password:hashPass,role:"user"})
 return  res.status(201).json({msg:register})

 } catch (error) {
  res.status(400).json(error.message)
 }
}