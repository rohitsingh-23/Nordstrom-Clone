const express = require("express");
const app = express();
app.use(express.static("public"));

const Product = require("./models/Products.model");
app.use(express.json());
// const userController = require("./controller/user.controller");
// const Product = require("./model/products.model");
// const Cart = require("./model/cart.model");
// const Address = require("./model/address.model");


app.use(express.urlencoded({ extended: true }));

app.get("/data", async (req, res) => {
    try {
      const data = await Product.find({}).lean().exec();
      // console.log(data)
      return res.json({ res: data });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  });
  app.post("/data", async (req,res)=>{
    try{
        const users=new Product(req.body)
        const createUser=await users.save()  
        
        res.status(201).send(createUser)
      
    }catch(e){
        res.status(400).send(e)
    }
  })

module.exports = app;
