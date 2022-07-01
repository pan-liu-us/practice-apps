require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const glossaryRoutes = require("./routes/glossaryRoutes.js")

const db = require('./db');

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use('/glossary', glossaryRoutes)

// app.get('/glossary', async(req, res) => {
//   const glossaries = await db.Glossary.find({});
//   console.log(glossaries);
//   res.send('ALL GLOSSARIES:');
//   res.render('/glossary', { glossaries });
// })

// app.get('/glossary/:id', async(req, res) => {
//   const { id } = req.params;
//   const glossary = await db.Glossary.findById(id);
//   console.log()
// })

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
