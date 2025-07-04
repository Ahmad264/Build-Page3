const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required:true,
            trim: true
        },
        lastName:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique: true,
            lowercase:true
        },
        password:{
            type:String,
            required:true
        },
        isClub: { 
            type: Boolean,
            default: false
        },
        transactionId: {
            type: String,
            default: null
        }
    },
    {timestamps:true}
);

// hashing the input password before saving
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
});

//comparing entered password with hashed password
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;