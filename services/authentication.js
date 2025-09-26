
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;
function generateToken(user){
    try {
        const payload = {
            _id:user._id, 
            fullName : user.fullName,
            email:user.email,
            role:user.role,
            profileImage:user.profileImage,
        }
        const token  = jwt.sign(payload , secretKey)
        return token;
    } catch (error ) {
        console.log("Error generating jwt token : \nError : ",error.message);
    }
}
function verifyToken(token){
    try {
        const userPayload = jwt.verify(token , secretKey)
        console.log(userPayload)
        return userPayload;
        
    } catch (error ) {
        console.log("Error verifying jwt token : \nError : ",error.message);
    }
}

module.exports = { generateToken , verifyToken , }