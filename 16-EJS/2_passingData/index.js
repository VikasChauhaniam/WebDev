import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  var nameLength = req.body.fName.length + req.body.lName.length; 
  res.render("index.ejs", {
    number : nameLength,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
