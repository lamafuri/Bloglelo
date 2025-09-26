const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const path = require('path')
require('dotenv').config();
const PORT = process.env.PORT;

const connectToMongoDB = require('./config/mongodb.conn');
connectToMongoDB();
const userRouter = require("./routes/user.routes");
const { checkForAuthenticationCookie } = require('./middlewares/authentication');

app.set('view engine','ejs')
app.set('views', path.resolve('./views'))

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(checkForAuthenticationCookie('token'))
app.use('/user' ,userRouter)
 
app.get('/',(req , res )=>{
    return res.render('home' , {
        user : req.user,
    })
})
app.listen(PORT , ()=>{
    console.log(`Server listening to port ${PORT}`)
})