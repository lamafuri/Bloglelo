const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config();
const PORT = process.env.PORT;

const connectToMongoDB = require('./config/mongodb.conn');
connectToMongoDB();
const userRouter = require("./routes/user.routes")

app.set('view engine','ejs')
app.set('views', path.resolve('./views'))

app.use(express.urlencoded({extended:true}))
app.use('/user' ,userRouter)
 
app.get('/',(req , res )=>{
    return res.render('home')
})
app.listen(PORT , ()=>{
    console.log(`Server listening to port ${PORT}`)
})