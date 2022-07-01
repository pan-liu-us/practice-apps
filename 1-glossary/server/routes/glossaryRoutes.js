const express = require("express");
const router = express.Router();
const { getGlossaries, createGlossary, updateGlossary, deleteGlossary } = require("../controllers/glossary.js")

router.get('/', getGlossaries);
router.post('/', createGlossary);
router.put('/:id', updateGlossary);
router.delete('/:id', deleteGlossary);

module.exports = router;
