const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
mongoose.connect("mongodb://localhost/test");

const Schema = mongoose.Schema;

const businessSchema = new Schema({
  _id: String,
  business_id: String,
  neighborhood: String,
  address: String,
  city: String,
  state: String,
  postal_code: String,
  longitude: String,
  latitude: String,
});

const photoSchema = new Schema({
  _id: String,
  id: String,
  business_id: String,
  caption: String,
  label: String,
  date: String,
});

const Business = mongoose.model("Business", businessSchema);
const Photo = mongoose.model("Photo", photoSchema);

module.exports = { Business: Business, Photo: Photo };
