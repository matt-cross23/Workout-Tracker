const router = require("express").Router();
const mongoose = require("mongoose");
const Exercise = require("../models/exercise.js");

router.get("/api/workouts", (req, res) => {
  Exercise.find({})
  .limit(7)
    .sort({ date: -1 })
    .then((dbExercise) => {
      res.json(dbExercise);
    });
  .catch((err => {
      res.status(400).json(err);
    });
});

router.post("/api/exercise", ({body}, res){
Exercise.create(body)
.then(dbExercise => {
res.json(dbExercise}
         })
.catch(err => {
  res.status(400).json(err);
  });
});

router.post("/api/exercise", ({body}, res) => {
Exercise.create(body)
.then(dbTransaction =>{
res.json(dbExercise}  
})
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
