const express = require('express');
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");

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
});

app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});
