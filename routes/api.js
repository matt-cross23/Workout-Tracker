const router = require("express").Router();
router.get("/api/exercise", (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then((dbExercise) => {
      res.json(dbExercise);
    });
});
module.exports = router;
