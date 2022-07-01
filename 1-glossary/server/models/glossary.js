const mongoose = require("mongoose");
const { Schema } = mongoose;

const glossarySchema = new Schema({
  word: {type: String, unique: true},
  definition: String
})

const Glossary = mongoose.model('Glossary', glossarySchema);

// Glossary.create({word: "test", definition: "just a test!"})

module.exports = Glossary;