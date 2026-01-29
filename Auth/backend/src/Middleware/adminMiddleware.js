const protectedAdmin=(req,res,next)=>{



if(!req.user) return res.status(400).json("Role Missing")

if(req.user.role !== "admin") return res.status(400).json("Admin only access")

next()
}
export default protectedAdmin
