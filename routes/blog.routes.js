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

const {handleCreateNewBlog, handleGetAllBlog , } = require('../controllers/blog');

router.get('/', handleGetAllBlog)
router.get('/new-blog' , (req , res)=>{
    res.render('addBlog' , {
        user:req.user
    });
});
router.post('/new-blog',upload.single('coverImage'),handleCreateNewBlog)

module.exports = router;