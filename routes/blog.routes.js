const {Router} = require('express');
const path = require('path');
const router = Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req , file , cb){
        return cb(null , path.resolve('public/uploads'));
    },
    filename:function(req, file , cb){
        const fileName = `${Date.now()}-${file.originalname}`;
        console.log(fileName + ": FILE NAME");
        return cb(null , fileName);
    }
})
const upload = multer({storage});

const {handleCreateNewBlog, handleGetAllBlog, handleDisplaySingleBlog ,handleCreateComment, handleDeleteComment, handleDeleteBlog,} = require('../controllers/blog');
const { checkForAuthorizationDeletingBlog } = require('../middlewares/authentication');

'/blog'
router.get('/', handleGetAllBlog)
router.get('/new-blog' , (req , res)=>{
    res.render('addBlog' , {
        user:req.user
    });
});
router.get('/:id',handleDisplaySingleBlog)
router.post('/new-blog',upload.single('coverImage'),handleCreateNewBlog)
router.get('/delete/:blogId', checkForAuthorizationDeletingBlog , handleDeleteBlog);

router.post('/comment/:blogId' , handleCreateComment);
router.get('/comment/delete/:commentId',handleDeleteComment);

module.exports = router;