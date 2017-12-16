const express = require('express');
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const fs = require("fs");

const port = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(multer({dest: __dirname + "/uploads"}).single("file"));

app.post("/get-file-size", (req, res) => {
  const obj = {
    size: req.file.size
  }
  res.json(obj);
  fs.unlink(req.file.path, (err) => {
    if (err) throw err;
  });
});

app.listen(port);
