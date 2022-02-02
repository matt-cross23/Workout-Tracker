const router = require("express").Router();
const mongoose = require("mongoose");
const Exercise = require("../models/exercise.js");
const router = express.Router();

// Create a new Workout
router.post("/api/exercise", ({body}, res) => {
Exercise.create(body)
.then(dbTransaction =>{
res.json(dbExercise}  
})
    .catch(err => {
      res.status(400).json(err);
    });
});
// Read all of the exercises in past week
router.get("/api/workouts/weekly", (req, res) => {
  Exercise.find({})
  .limit(7)
    .then((dbExercise) => {
      res.json(dbExercise);
    });
  .catch((err => {
      res.status(400).json(err);
    });
});

// Read all exercises
router.get("/api/workouts", (req, res){
Exercise.create({})
.then(dbExercise => {
res.json(dbExercise}
         })
.catch(err => {
  res.status(400).json(err);
  });
});




module.exports = router;
