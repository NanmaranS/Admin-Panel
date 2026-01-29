import express from 'express'
import { login } from '../Controllers/loginController.js'
const loginRouter=express.Router()

loginRouter.post('/',login)

export default loginRouter