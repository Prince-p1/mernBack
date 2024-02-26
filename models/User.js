const mongoose = require('mongoose')
const {schema } = mongoose;  
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:false
    },
    date:{
        type:String,
        default:Date.now
    }
});

module.exports = mongoose.model('user',UserSchema)


