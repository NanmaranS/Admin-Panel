import jwt from 'jsonwebtoken'
const jwtExistMiddleware=(req,res,next)=>{

try {
      const authHeader =req.headers.authorization

if(!authHeader) return res.status(401).json("token misisng")

const token=authHeader.split(" ")[1]  

const decoded=jwt.verify(token,process.env.JWT_SECRET)
req.user=decoded

next()

    } catch (error) {
        res.status(400).json(error.message)
    }
}
export default jwtExistMiddleware