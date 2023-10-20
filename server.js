const express = require("express");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use("/quiz", require("./routes/quizRoute"));
app.use("/quizResult", require("./routes/quizResultRoute"));
connectDB();

const PORT = process.env.PORT || 3500;
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
