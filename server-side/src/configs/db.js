const mongoose = require('mongoose')
module.exports = () => {
  return mongoose.connect(
    `mongodb+srv://Tazammul:db1683@cluster0.xywdp.mongodb.net/Nordstrom`,
  )
}