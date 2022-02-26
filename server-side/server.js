const app = require("./index");
const connect = require("./configs/db");

app.listen(4500, async () => {
  try {
    await connect();
    console.log("listening to the port 4500");
  } catch (e) {
    console.log(e);
  }
});
