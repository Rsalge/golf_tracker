require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

console.log("The datbse host is: ", process.env.DB_HOST);
const db = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
  process.env.DB_HOST
}`;
//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

// connect to mongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => {
    console.log(err);
    console.log("\x1b[31m\x1b[1m MongoDB Not Connected");
  });
// print mongoose queries
mongoose.set("debug", true);
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// print that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//Models and routes
require("./models/Users");
// passort config must be below all models
require("./config/passport");
app.use(require("./routes"));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS TEST IS CONNECTED TO REACT" });
});
//testing
