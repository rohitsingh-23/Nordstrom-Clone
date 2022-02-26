const mongoose= require("mongoose")
const checkoutSchema=new mongoose.Schema({
   email:{type:String},
   first_name:{type:String},
   last_name:{type:String},
   address:{type:String},
   postal_code:{type:Number},
   city:{type:String},
   phone:{type:Number},
   country:{type:String}
},
{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("Checkout",checkoutSchema)