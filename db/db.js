const mongoose = require("mongoose");
const db = mongoose.connection;


//create our db and connect
mongoose.connect("mongodb://localhost/tennisStars");

mongoose.connection.on("connected", () => {
	console.log("mongoose is connected");
});

mongoose.connection.on("error", (err) => {
	console.log(err, "mongoose error");
});

mongoose.connection.on("disconnected", () => {
	console.log("mongoose is disconnected");
});