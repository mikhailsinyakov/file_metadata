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
    callback(null, file.originalname)
  }
})
//const upload = multer({storage: storage});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(multer({storage: storage}).single("file"));

app.post("/get-file-size", (req, res) => {
  
  if (req.file) console.log(req.file);
  console.log(req.body);
  const obj = {
    size: ""
  }
  res.json(obj);
});

app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});
