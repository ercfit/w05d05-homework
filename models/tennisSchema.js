const mongoose = require("mongoose");

const tennisSchema = mongoose.Schema({
										name: String,
										home: String
									});

const TennisStars = mongoose.model("TennisStars", tennisSchema);

module.exports = TennisStars;