const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Workout-Tracker",
  {
    useNewURLParser: true,
    useFindAndModify: false,
  }
);

app.use(require("./routes/api.js"));
app.use(require("./routes/homeRoutes.js"));

app.listen(PORT, () => {
  console.log(`Your App is listening on port ${PORT}!`);
});
