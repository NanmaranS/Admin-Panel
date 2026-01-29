import express from 'express'
import { adminController ,deleteController} from '../Controllers/adminController.js'
 import protectedAdmin from '../Middleware/adminMiddleware.js'
 import jwtExistMiddleware from '../Middleware/jwtExistMiddleware.js'

const adminRouter=express.Router()

adminRouter.get('/',jwtExistMiddleware,protectedAdmin,adminController)
adminRouter.delete('/:id',jwtExistMiddleware,protectedAdmin,deleteController)
export default adminRouter