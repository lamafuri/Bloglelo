const {Schema , model} = require('mongoose');
const reportSchema = new Schema({
    email:{
        type:String ,
        required:true,
        trim:true ,
    },
    content:{
        type:String , 
        required:true,
        trim:true,
    }
} ,
{timestamps:true})

const reportModel = model('report',reportSchema)
module.exports = reportModel;