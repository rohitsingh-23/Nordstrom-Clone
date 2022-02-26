const mongoose= require("mongoose")
const productSchema=new mongoose.Schema({
   title:{type:String},
   brand:{type:String},
   price:{type:Number},
   discount:{type:Number},
   images:[{type:String}],
   description:{type:String},
   size:[{type:String}],
   size_info:[{type:String}],
   details_and_care:[{type:String}],
   color:[{type:Number}],
},
{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("Products",productSchema)