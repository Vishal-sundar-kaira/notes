const mongoose=require('mongoose');
const {Schema}=mongoose;
const NotesSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})
const Farmer=mongoose.model('Farmer',NotesSchema)
module.exports=Farmer