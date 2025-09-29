const blogModel = require("../models/blog");
const { verifyToken } = require("../services/authentication");

function checkForAuthenticationCookie(authToken) {
  return function (req, res, next) {
    try {
      const token = req.cookies[authToken];
      if (!token) return next();
      const user = verifyToken(token);
      if (!user) return next();
      req.user = user;
      console.log(user.fullName + " auth middleware ran");
      return next();
    } catch (error) {
      console.log("Error checking for authentication cookie in middlewares:");
      return next();
    }
  };
}
async function checkForAuthorizationDeletingBlog(req, res, next) {
  try {
    const blogId = req.params.blogId;
    const currentBlog = await blogModel.findById(blogId);
    if (!currentBlog) {
      req.flash("deleteError", "Blog not found");
      return res.redirect("/blogs"); // fallback page
    }
    if (currentBlog.createdBy._id.toString() !== req.user._id.toString()) {
      console.log(req.user.fullName + " is not authorized to delete this blog");
      req.flash("deleteError", "You are not authorized to delete this blog");
      return res.redirect(`/blog/${blogId}`);
    }
    return next();
  } catch (error) {
    console.log(
      "Error checking for authorization while deleting blog in middlewares:"
    );
    console.log(error.message);
  }
}
// middlewares/trackReferer.js
// function trackReferer(req, res, next) {
//   const referer = req.get("Referer"); // or req.headers.referer
//   req.previousUrl = referer || '/';

//   console.log(`🔍 Request to ${req.originalUrl} came from:`, req.previousUrl);

//   next();
// }


module.exports = {
  checkForAuthenticationCookie,
  checkForAuthorizationDeletingBlog,
};
