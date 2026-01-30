import  { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Admin() {

  const nav=useNavigate()
const [adminDetail,setadminDetail]=useState([])
const token = localStorage.getItem("token")

const colors = ["bg-success", "bg-primary", "bg-secondary", "bg-warning", "bg-info"];

useEffect(()=>{
   if (!token) {
    alert("No token found. Please login again")
    return}
    
axios.get('https://admin-panel-backend-094i.onrender.com/auth/admin',{
  headers:{
     Authorization: `Bearer ${token}`
  }
})
.then((res)=>setadminDetail(res.data))
.catch((err)=>{
   if (err.response && err.response.status === 400) {
      alert("Only Admin Access This Access")  
      localStorage.removeItem("token") 
      window.location.href = '/'       
    } else {
      console.log(err.message)
    }
})
},[])  


const deleteUser=(admin)=>{
axios.delete(`https://admin-panel-backend-094i.onrender.com/auth/admin/${admin._id}`,{
  headers:{
    Authorization:`Bearer ${token}`
  }
})
.then(()=>{
  setadminDetail(prev=>prev.filter(user=>user._id !==admin._id))
  alert("User Deleted")
})
.catch((err)=>{
 console.log(err.message);
 
})
}
const logout=()=>{
  localStorage.removeItem('token')
  alert('log out successfully')
  nav('/')
}
  return (
  
    <div>

<div className="pos-f-t">
  <div className="offcanvas offcanvas-start" id="navbarToggleExternalContent" style={{width:"290px"}}>
    <div className="bg-primary pt-3" style={{height:"56px"}}>
   <div >
<h5 className='text-white text-center'>ADMIN PANEL</h5>  
<div className='bg-dark' style={{height:"100vh"}}>


<div className=''>

<ul className=' list-unstyled mt-3 admin-list text-white  p-3' >

<li className='admin-list-cursor my-3'> <Link to='/admin'> <i className="admin-list bi bi-house-door-fill "></i> Dashboard</Link></li>
<li className='admin-list-cursor my-3'> <Link to=''> <i className="admin-list bi bi-person-lines-fill"></i> Users</Link>     </li>
<li className='admin-list-cursor my-3'> <Link><i className="admin-list bi bi-gear"></i> Settings</Link>  </li>
<li className='admin-list-cursor '> <Link onClick={()=>{logout()}}> <i className="admin-list bi bi-box-arrow-left"></i> Logout</Link>    </li>
</ul>

</div>  
    </div >   
   </div>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-primary">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>



<div className="container-fluid mt-5">
  <div className="row g-3">

    {adminDetail.map((admin, index) => (
      <div key={admin._id} className="col-12 col-md-6 col-lg-3">
        <div
          className={`card h-100 p-3 d-flex flex-column ${colors[index % colors.length]}`}
        >
          
          
          <div className="mb-3">
            <p className="mb-1"><b>Username:</b> {admin.username}</p>
            <p className="mb-1 text-break"><b>Email:</b> {admin.email}</p>
            <p className="mb-1"><b>Role:</b> {admin.role}</p>
            <p className="mb-0"><b>LoginAt:</b> {new Date(admin.createdAt).toLocaleString()}</p>
          </div>

          <div className="mt-auto d-flex justify-content-center">
            <button onClick={()=>{deleteUser(admin)}} className="btn btn-danger btn-sm"> { /* tommorow delete  and class to clasname finsh proejct */}
              Delete User
            </button>
          </div>

        </div>
      </div>
    ))}

  </div>
</div>



</div>

 )
}
