import express from "express";
import sequelize from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hi, this is Node Homework 7");
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
});
