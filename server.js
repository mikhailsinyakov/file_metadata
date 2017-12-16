const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

app.post("/get-file-size", (req, res) => {
  
  console.log(req.get("Content-Type"));
  const obj = {
    size: ""
  }
  res.json(obj);
});

app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});
