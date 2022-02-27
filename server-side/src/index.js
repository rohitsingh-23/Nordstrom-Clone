const express = require("express");

const passport = require("./configs/passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    //origin:['http://localhost:3000']
  })
);

const routes = require("./routes/routes");

app.use("/users", routes);

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
app.post("/data", async (req, res) => {
  try {
    const users = new Product(req.body);
    const createUser = await users.save();

    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/product/:id", async(req, res) => {
  try {
    const item = await Product.find({ _id: req.params.id }).lean().exec();
  return res.json({ res: item });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

//users login gOuth
passport.serializeUser(function (user, callback) {
  callback(null, user);
});

passport.deserializeUser(function (user, callback) {
  callback(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/google/failure",
  }),
  (req, res) => {
    let user_id = req.user.user._id;
    res.render("landingPage", {
      user_id: user_id,
    });
  }
);

app.get("/auth/google/failure", (req, res) => {
  return res.send("Failure");
});

module.exports = app;
