import  { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Register() {

const[username,setUsername]=useState("")
const[password,setPassword]=useState("")
const[email,setEmail]=useState("")
  
const handleSubmit=(e)=>{
e.preventDefault()

axios.post('http://localhost:5001/auth/register',{

  username:username,
  password:password,
  email:email
 })
 .then(()=>{
 setUsername('')
 setPassword('')
 setEmail('')
alert("Register Successfully")
})
.catch((err)=>console.log(err.message))

}

  return (
<div className=''>

 <div style={{ position: "absolute", top: "50px", left: "20px" }}>
    <Link className='text-danger fs-3 ms-5 ps-5' to='/'>
      <i className="bi bi-arrow-left-square-fill"></i>
    </Link>

  </div>
  
  <div className='d-flex justify-content-center align-items-center  'style={{minHeight:"100vh"}}>
<form onSubmit={handleSubmit} className=' p-5  shadow'style={{width:"600px"}}>

<div className='text-center'>
<h2  className='bg-dark text-white d-inline'><i>Register Form</i></h2>
</div>

    <div className="form-group m-3 ">
    <label className='mb-2' htmlFor="username">Username</label>
    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" className="form-control " id="username" placeholder="Enter  Username"/>
  </div>

  <div className="form-group m-3">
    <label className='mb-2' htmlFor="exampleInputPassword1">Password</label>
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
  </div>

  <div className="form-group m-3">
    <label className='mb-2' htmlFor="exampleInputEmail1">Email address</label>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className='text-center'>
  <button type="submit" className="  btn btn-primary">Submit</button>
  </div>
</form>
</div>
</div>
  )
}
