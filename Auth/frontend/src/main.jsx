import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Register from './Pages/Register.jsx'
import Admin from './Pages/Admins/Admin.jsx'
import App from './App.jsx'

const router=createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/register",element:<Register/>},
  {path:"/admin",element:<Admin/>}
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
