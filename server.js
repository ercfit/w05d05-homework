const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
require("./db/db");

//I made a TennisStars schema--at this point nothing has been created in my DB
//I am importing it here and using it to create a new TennisStar in my DB
//I am adding a several documents to my collection at once--fingers crossed

// const mongoose = require("mongoose");
// // const db = mongoose.connection;
// const TennisStars = require("./models/tennisSchema.js");
// const TennisStarsData = require("./models/tennisStarsData.js")

// mongoose.connect('mongodb://localhost:27017/tennisStarsProject');
// app.on("error", (err) => {
// 	console.log(err, "ERROR message");
// });

// app.on("connected", () => {
// 	console.log("MONGOOSE connected!");
// });

// TennisStars.collection.insertMany(TennisStarsData, (err, data) => {
// 	console.log("added Stars");
// 	mongoose.connection.close();
// });


//middleware bodyParser allows us to read the contents of a form
app.use(bodyParser.urlencoded({extended:false}));
//middleware methodOverride allows us to take actions (DELETE/POST)
app.use(methodOverride("_method"));
app.use((req, res, next) => {
	console.log("go girl");
	next();
});	
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));

const tennisController = require("./controllers/tennisController");
app.use("/tennisStars", tennisController);




app.listen(PORT, () => {
	console.log("10 - 4 on 3000.")
});