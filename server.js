const express = require("express");
const mongoose = require("mongoose");
const Port = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("public");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout-Tracker",{
        useNewURLParser: true,
        useFindAndModify: false
        });
app.use(require("./routes/api.js")
                
app.listen(PORT, () =>{
  console.log(`Your App is listening on port ${PORT}!`);
});
