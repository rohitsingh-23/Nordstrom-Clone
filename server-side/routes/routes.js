const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user");

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hashedPassword,
  });
  const result = await user.save();
  const { password, ...data } = await result.toJSON();
  res.send(data);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send({ message: "user not found" });
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({ message: "invalid credintials" });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
  res.cookie("jwt", token, {
    httpOnly: false,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  res.send({
    message: "success",
  });
});

router.post("/check", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.send({ message: "no" });
  } else {
    return res.status(200).send({ message: "yes" });
  }
});

router.get("/user", async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];

    const claims = jwt.verify(cookie, process.env.JWT_SECRET_KEY);
    if (!claims) {
      return res.status(401).send({ message: "unauthentcated" });
    }
    const user = await User.findOne({ _id: claims._id });
    const { password, ...data } = await user.toJSON();
    res.send(data);
  } catch (e) {
    return res.status(401).send({ message: "unauthentcated" });
  }
});

router.post("/logout", async (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.send({
    message: "success",
  });
});
module.exports = router;
