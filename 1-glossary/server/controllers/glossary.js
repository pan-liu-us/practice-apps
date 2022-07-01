const Glossary = require("../models/glossary.js");

const getGlossaries = async(req, res) => {
  // res.send('GET WORKS!!!')
  try {
    const allGlossaries = await Glossary.find();
    res.status(200).json(allGlossaries);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const createGlossary = async(req, res) => {
  // res.send('POST WORKS!!!')
  const { word, definition } = req.body;
  try {
    const newGlossary = await Glossary.create({word, definition})
    const all = await Glossary.find({})
    res.status(201).json(all);
  }
  catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
}

const updateGlossary = async(req, res) => {
  const { id } = req.params
  const { newDefinition } = req.body;
  try {
    const updatedGlossary = await Glossary.findByIdAndUpdate(id, {definition: newDefinition})
    const all = await Glossary.find({})
    res.status(200).json(all);
  }
  catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
}

const deleteGlossary = async(req, res) => {
  const { id } = req.params;
  try {
    const deletedGlossary = await Glossary.findByIdAndDelete(id)
    const all = await Glossary.find({})
    res.status(200).json(all);
  }
  catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
}


module.exports.getGlossaries = getGlossaries;
module.exports.createGlossary = createGlossary;
module.exports.updateGlossary = updateGlossary;
module.exports.deleteGlossary = deleteGlossary;