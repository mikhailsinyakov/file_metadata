const express = require('express');
const app = express();
const multer = require("multer");

const port = process.env.PORT;
const upload = multer();

app.use(express.static('public'));

app.post("/get-file-size", upload.array(), (req, res) => {
  
  console.log(req.body);
  const obj = {
    size: ""
  }
  res.json(obj);
});

app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});
