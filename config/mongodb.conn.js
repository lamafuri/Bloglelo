const mongoose = require('mongoose')

async function connectToMongoDB(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB conneted succesfully");
        return;
    } catch (error) {
        console.log("Error connecting to Mongo DB:\nError:",error.message)
    }
}
module.exports = connectToMongoDB;