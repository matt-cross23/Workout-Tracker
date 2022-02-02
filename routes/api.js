const router = require("express").Router();
const mongoose = require("mongoose");
const Exercise = require("../models/exercise.js");

router.get("/api/exercise", (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then((dbExercise) => {
      res.json(dbExercise);
    });
  .catch((err))
});
module.exports = router;
