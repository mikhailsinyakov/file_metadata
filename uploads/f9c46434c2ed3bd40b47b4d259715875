const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongo = require("mongodb").MongoClient;
const app = express();
const url = "mongodb://localhost:27017";
app.use(express.static(path.join(__dirname, "/client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongo.connect(url, (err, db) => {
	if (err) console.error(err);
	let data;
	const coll = db.db("money").collection("money");
	
	updateData();

	

	function updateData() {
		data = {};
		coll.find().toArray((err, result) => {
			if (err) {
				res.send("Can't access to database");
				return;
			}
			result.forEach(val => {
				if (!val.name) data[val.id] = val.value;
				else data[val.id] = {
					name: val.name,
					value: val.value
				};
			});
			app.get("/get", (req, res) => {
				res.json(data);
			});
			app.put("/update",  (req, res) => {
			coll.update({
					id: req.body.id
				}, 
				{
					id: req.body.id,
					value: req.body.value
				});
				updateData();
				res.send("OK");
			});
		});
		
	}
	//db.close();
});

app.listen(80, () => console.log("Listening"));