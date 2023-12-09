const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const upload = multer({ dest: __dirname + "/public/images" });

mongoose
  .connect(
    "mongodb+srv://Cluster50738:space@cluster50738.tlt566q.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const soccerSchema = new mongoose.Schema({
  name: String,
  description: String,
  players: [String],
  img: String,
});

const Soccer = mongoose.model("Soccer", soccerSchema);

app.get("/api/soccer", (req, res) => {
  getSoccerData(res);
});

const getSoccerData = async (res) => {
  const soccerItems = await Soccer.find();
  res.send(soccerItems);
};

app.post("/api/soccer", upload.single("img"), (req, res) => {
  const result = validateSoccerItem(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const soccerItem = new Soccer({
    name: req.body.name,
    description: req.body.description,
    players: req.body.players.split(","),
  });

  if (req.file) {
    soccerItem.img = "images/" + req.file.filename;
  }

  createSoccerItem(soccerItem, res);
});

const createSoccerItem = async (soccerItem, res) => {
  const result = await soccerItem.save();
  res.send(soccerItem);
};

app.put("/api/soccer/:id", upload.single("img"), (req, res) => {
  const result = validateSoccerItem(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  updateSoccerItem(req, res);
});

const updateSoccerItem = async (req, res) => {
  let fieldsToUpdate = {
    name: req.body.name,
    description: req.body.description,
    players: req.body.players.split(","),
  };

  if (req.file) {
    fieldsToUpdate.img = "images/" + req.file.filename;
  }

  const result = await Soccer.updateOne(
    { _id: req.params.id },
    fieldsToUpdate
  );
  const soccerItem = await Soccer.findById(req.params.id);
  res.send(soccerItem);
};

app.delete("/api/soccer/:id", upload.single("img"), (req, res) => {
  removeSoccerItem(res, req.params.id);
});

const removeSoccerItem = async (res, id) => {
  const soccerItem = await Soccer.findByIdAndDelete(id);
  res.send(soccerItem);
};

const validateSoccerItem = (soccerItem) => {
  const schema = Joi.object({
    _id: Joi.allow(""),
    players: Joi.allow(""),
    name: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
  });

  return schema.validate(soccerItem);
};

app.listen(3000, () => {
  console.log("Server is running...");
});
