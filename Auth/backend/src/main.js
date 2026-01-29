import express from 'express'
import cors from 'cors'
import regRouter from './Routers/registerRouter.js'
import connectDB from './Config/db.js'
import dotenv from 'dotenv'
import loginRouter from './Routers/loginRouter.js'
import adminRouter from './Routers/adminRouter.js'

const app=express()

app.use(cors())
app.use(express.json())

dotenv.config()

connectDB()

app.use('/auth/register',regRouter)
app.use('/auth/login',loginRouter)
app.use('/auth/admin',adminRouter)

const PORT=process.env.PORT || 5001
app.listen(PORT,()=>{
    console.log(`server lsitening"${PORT}`);

    
})
