const userModel = require("../models/user");
async function handleUserSignUp(req, res) {
  try {
    const { fullName, email, password } = req.body;
    const newUser = await userModel.create({ fullName, email, password });
    res.redirect("/");
  } catch (err) {
    console.log("Error signing in user:\nError:", err.message);
  }
}
async function handleUserSignIn(req, res) {
  try {
    const { email, password } = req.body;
    const token = await userModel.matchHash(email, password);
    if (!token) {
      console.log("Passord or email incorrect");
      return res.render('signin',{
        error:"Invalid Email or Password"
      });
    }
    console.log("JWT Token :" + token)
    return res.cookie('token',token).redirect("/");
  } catch (err) {
    console.log("Error signing in user:\nError:", err.message);
  }
}

module.exports = {
  handleUserSignUp,
  handleUserSignIn,
};
