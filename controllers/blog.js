const blogModel = require('../models/blog');
const userModel = require('../models/user');
const commentModel = require('../models/comment');
async function handleCreateNewBlog (req , res) {
    try {
        const {title , body} = req.body;
        const coverImage = req.file;
        console.log(title , body)
        console.log(coverImage)
        const newBlog = await blogModel.create({
            title,
            body,
            coverImageURL:`/uploads/${coverImage.filename}`,
            createdBy :req.user._id,
        });
        res.redirect(`/blog/${newBlog._id}`);
    } catch (error) {
        console.log("Error creating new blog:\nError:", err.message);
    }
}
async function handleGetAllBlog(req , res) {
    try {
        const allBlogs = await blogModel.find({});
        //sort on which first created
        allBlogs.sort((a,b)=>{
            let first = a.createdAt.toString();
            let second = b.createdAt.toString();
            return first.localeCompare(second)
        });
        //reverse so latest blog at top
        allBlogs.reverse();
        return res.render('blog' , {
            allBlogs,
            user:req.user
        })
    } catch (err) {
        console.log("Error getting all blog:\nError:", err.message);
    }
}
async function handleDisplaySingleBlog (req , res) {
    try {
        const blogId = req.params.id;
        const blog = await blogModel.findById(blogId).populate('createdBy');
        const allBlogs = await blogModel.find({});
        const comment = await commentModel.find({blogId}).populate('createdBy');
        // console.log(JSON.stringify(comment));
        console.log(comment.length +" is the length of comment array")
        return res.render('singleBlog',{
            blog,
            user:req.user,
            allBlogs,
            comment,
            deleteError:req.flash("deleteError")[0],
        })

    } catch (err) {
     console.log("Error displaying  all blog:\nError:", err.message);
    }   
}
async function handleDeleteBlog(req, res) {
    try {
        const blogId = req.params.blogId;
        const deletedBlog = await blogModel.findByIdAndDelete(blogId);
        console.log(`${deletedBlog.title} deleted successfully`);
        return res.redirect('/blog');
    } catch (err) {
        console.log("Error deleting blog:\nError:", err.message);
        
    }
}
async function handleCreateComment (req, res ) {
    try {
        const{content} = req.body;
       const comment = await commentModel.create({
        content,
        blogId:req.params.blogId,
        createdBy: req.user._id,
       })
       return res.redirect(`/blog/${req.params.blogId}`);
    } catch (err) {
        console.log("Error creating comment:\nError:", err.message);
    }
}
async function handleDeleteComment (req , res ) {
    try {
        const commentId = req.params.commentId;
        const deletedComment = await commentModel.findByIdAndDelete(commentId);
        console.log(deletedComment.content +" deleted success")
        return res.redirect(`/blog/${deletedComment.blogId}`);
    } catch (err) {
        console.log("Error deleting comment:\nError:", err.message);
        
    }
}
module.exports = {
    handleCreateNewBlog , handleGetAllBlog, handleDisplaySingleBlog, handleCreateComment , handleDeleteComment , handleDeleteBlog
}