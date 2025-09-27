const blogModel = require('../models/blog');
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

module.exports = {
    handleCreateNewBlog , handleGetAllBlog,

}