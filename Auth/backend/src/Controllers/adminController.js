import RegisterModel from '../Models/registerModel.js'
export async function adminController(req,res){
    try {
      const getuserDetails=await RegisterModel.find({role:{$ne:'admin'}}).select("-password")

     res.status(200).json(getuserDetails)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
export async function deleteController(req,res) {
 try {

     const {id}=req.params

if(!id) return res.status(404).json("id not found")

const getid= await RegisterModel.findByIdAndDelete(id)
return res.status(200).json("users Deleted")


 } catch (error) {
res.status(400).json(error.message)    
 }   

    
}