const mongoose = require("mongoose");
const {createHmac , randomBytes} = require('crypto');
const { generateToken } = require("../services/authentication");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    salt: {
      type: String,
    },
    role: {
      type: String,
      enum: ["ADMIN", "NORMAL"],
      default: "NORMAL",
    },
    profileImage: {
      type: String,
      default: "/images/defaultProfile.png",
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre('save', function(next){
    try {
        const user = this;
        if(!user.isModified('password')) return ;
        const salt = randomBytes(16).toString();
        const hashedPassword = createHmac('sha256',salt)
                                    .update(user.password)
                                    .digest('hex');
        this.salt = salt;
        this.password = hashedPassword;
        next();
    } catch (err ) {
        console.log('Error while hashing the password\nError:', err.message);
    }
})
userSchema.static('matchHash', async function(inEmail , inPassword){
    try {
        const currentUser = await this.findOne({email : inEmail});
        // console.log(currentUser.email, currentUser.password)
        if(currentUser.email !== inEmail) return false;
        const salt = currentUser.salt;
        // console.log(salt)
        const providedPasswordHash = createHmac('sha256',salt).update(inPassword).digest('hex');
        if(currentUser.password !== providedPasswordHash) return false;
        console.log("Ran till end")
        const token = generateToken(currentUser)
        return token;
    } catch (err ) {
        console.log("Error while hashing the password:\nError:",err.message)
    }
})


const Model = mongoose.model('user',userSchema)
module.exports = Model;


