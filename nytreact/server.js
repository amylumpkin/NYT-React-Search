const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const articleRoutes = require("./routes/articleApi");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// for ajax requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// static if deployed to heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// add api route
app.use("/api/article", articleRoutes);

// define api route and then send request to react
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
