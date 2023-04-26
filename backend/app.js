const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

if(process.env.NODE_ENV !== "Production"){
dotenv.config({path: "backend/config/config.env"})
}
// Apply Middleware
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({limit: "50mb",extended:true}))
app.use(cookieParser())

// Importing Routes
const post = require('./Routes/postRoute')
const user = require('./Routes/userRoute')

// Using Routes

app.use('/api/v1',post)
app.use('/api/v1',user)




module.exports = app