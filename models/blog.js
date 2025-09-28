const {Schema , model} = require('mongoose');

const blogSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    body:{
        type:String, 
        required:true,
        trim:true,
    },
    coverImageURL : {
        type:String , 
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'user',
    }
} ,
{
    timestamps:true
})
const blogModel = model('blog',blogSchema);
module.exports = blogModel;