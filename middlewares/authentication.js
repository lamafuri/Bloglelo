const { verifyToken } = require("../services/authentication")

function checkForAuthenticationCookie(authToken){
    return function(req , res ,next){
        try {
            const token = req.cookies[authToken];
            if(!token) return next();
            const user = verifyToken(token)
            if(!user) return next();
            req.user = user
            console.log(user.fullName);
            return next();
        } catch (error ) {
            console.log("Error checking for authentication cookie in middlewares:");
            return next();
        }
    }
}

module.exports = {checkForAuthenticationCookie  , }