const { Router } = require("express");
const router = Router();
const userModel = require("../models/user");
const { handleUserSignUp , handleUserSignIn , } = require('../controllers/user')

/* /user */
router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/signin", (req, res) => {
  return res.render("signin");
});
router.get('/logout' , (req, res)=>{
  return res.clearCookie('token').redirect('/');
})

router.post("/signup", handleUserSignUp);

router.post('/signin' , handleUserSignIn);

module.exports = router;
