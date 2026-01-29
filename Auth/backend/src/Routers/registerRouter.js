import express from 'express'
import {register} from '../Controllers/registerController.js'

const regRouter=express.Router()

regRouter.post('/',register)

export default regRouter