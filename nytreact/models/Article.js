const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
      type: String,
      require: true,
  },
  date: {
      type: String,
      require: true
  },
  url: {
      type: String,
      require: true
  }
  });

module.exports = mongoose.model("articles", articlesSchema);