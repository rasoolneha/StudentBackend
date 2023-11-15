const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const studentRoutes = require("./controller/studentRoutes");

const app = express();

mongoose.set("strictQuery", true);
const uri =
  "mongodb+srv://nehanoor:ammu2004@cluster0.sfxufsi.mongodb.net/MySchool";
mongoose.connect(uri);
const db = mongoose.connection;
db.on("open", () => {
  console.log("Database Connected");
});
db.on("error", (error) => {
  console.log("error while connecting database", error);
});

app.use(express.json());
app.use(cors()); //instantiating cors
app.use("/students", studentRoutes);

const port = 5000;
app.listen(port, () => {
  console.log("server listening", port);
});
