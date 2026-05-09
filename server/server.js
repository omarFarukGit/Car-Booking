
import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import userRouter from './routes/userRouts.js';
import ownerRouter from './routes/ownerRoutes.js';
import bookingRouter from './routes/bookingRouts.js';


// Initialize Express App
const app = express()

await connectDB() 
// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>res.send("Server is running car rental..."))
app.use("/api/user",userRouter)
app.use("/api/owner",ownerRouter)
app.use("/api/bookings",bookingRouter)




const PORT=process.env.PORT || 3000;
 
app.listen(PORT,()=>console.log(`Server running on port:${PORT}`))