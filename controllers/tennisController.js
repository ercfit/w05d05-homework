const express = require("express");
const router = express.Router();
const TennisStars = require ("../models/tennisSchema.js");//schema
const TennisStarsData = require("../models/tennisStarsData.js")

router.get('/', (req, res) => {
	TennisStars.find({}, (err, allStars) => {
		if (err){
			res.send(err);
		} else {
			res.render("index.ejs", {
				"tennisStarsList": allStars
			})
		}	
	});	
});

// POST route this is the route that the form is sending its info to (the CREATE route) request object is information being sent to the server
// contents of the form will be in req.body
router.post("/", (req, res) => {

//CREATE "router" goes above the NEW route
TennisStars.create(req.body, (err, createdStar) => {
	if (err){
		console.log(err)
		res.send(err)
	}else{
		console.log(createdStar)
		res.redirect("/tennisStars");
	}
});
});

//NEW route
router.get("/new", (req, res) => {
	res.render("new.ejs");
});

//EDIT route
router.get("/:id/edit", (req, res) => {
	TennisStars.findById(req.params.id, (err, foundStar) => {
		res.render("edit.ejs", {
			"tennisStarsList": foundStar
		});
	});
});

//SHOW route
router.get("/:id", (req, res) => {
	console.log("**show route**")
	TennisStars.findById(req.params.id, (err, foundStar) => {
		if(err){
			console.log(err)
		}
		res.render("show.ejs", {
			"tennisStarsList": foundStar
		});
	});
});

router.put("/:id", (req, res) => {
	TennisStars.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedStar) => {
		if(err){
			res.send(err);
		}else{
			res.redirect("/tennisStars");
		}
	});
});


//create a delete route
router.delete("/:id", (req, res) => {
	TennisStars.findByIdAndRemove(req.params.id, (err, deletedStar) => {
		if(err){
			console.log(err, "this is an error in delete")
			res.send(err);
		}else{
			console.log(deletedStar, "this is deletedStar in the delete route")
			res.redirect('/tennisStars');
		}
	});
});

module.exports = router;
