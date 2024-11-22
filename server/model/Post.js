import mongoose, { Types } from "mongoose";

// Define Schema
const postSchema=new mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    qty:{
        type:Number,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },

})

//  Compiling Schema
const postModel = mongoose.model('post',postSchema)

export default postModel;