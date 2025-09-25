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
    const isMatch = await userModel.matchHash(email, password);
    console.log(isMatch)
    if (!isMatch) {
      console.log("Passord or email incorrect");
      return res.redirect("/user/signin");
    }
    return res.redirect("/");
  } catch (err) {
    console.log("Error signing in user:\nError:", err.message);
  }
}

module.exports = {
  handleUserSignUp,
  handleUserSignIn,
};
