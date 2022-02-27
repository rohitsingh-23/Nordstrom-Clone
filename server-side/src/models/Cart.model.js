const mongoose= require("mongoose")
const cartSchema=new mongoose.Schema({
    userID:{type: mongoose.Schema.Types.ObjectId,
        ref:"users"},
       productID:{type: mongoose.Schema.Types.ObjectId,
        ref:"products"},
},
{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("Cart",cartSchema)