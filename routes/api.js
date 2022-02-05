const router = require("express").Router();
const Exercise = require("../models/exercise.js");
const db = require('../models')
// Create a new Workout
router.post("/api/workouts", ({body}, res) => {
Exercise.create(body)
.then(dbExercise =>{
res.json(dbExercise)  
})
    .catch(err => {
      res.status(400).json(err);
    });
});
// Read all of the exercises in past week
router.get("/api/workouts/range", (req, res) => {
  Exercise.find({})
  .limit(7)
    .then((dbExercise) => {
      res.json(dbExercise);
    })
  .catch((err => {
      res.status(400).json(err);
    }))
});
router.put("/api/workouts/:id", (req, res) =>{
  console.log('paramater:', req.params)
  Exercise.findByIdAndUpdate(
    req.params.id,
    {$push: {exercise: req.body}},
    {new: true, runValidators: true}
  )
  .then((workout) =>{
    res.json(workout)
  })
  .catch((err) =>{
    res.json(err)
  })
}) 

// Read all exercises
router.get("/api/workouts", (req, res) =>{
Exercise.aggregate([
  {
    $addFields: {
      totalDuration: {
        $sum: '$exercise.duration'
      }
    }
  }
])
.then(dbExercise => {
res.json(dbExercise)
         })
.catch(err => {
  res.status(400).json(err);
  })

});




module.exports = router;
