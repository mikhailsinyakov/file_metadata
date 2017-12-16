const express = require('express');
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");

const port = process.env.PORT;
const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (request, file, callback) => {
    console.log(file);
    callback(null, file.originalname)
  }
})
const upload = multer({dest: "./uploads/"});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post("/get-file-size", upload.single('file'), (req, res) => {
  
  console.log(req.body);
  const obj = {
    size: ""
  }
  res.json(obj);
});

app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});
