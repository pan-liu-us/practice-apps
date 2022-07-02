require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const { submitForm, getUser } = require('./controller/index.js')

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json())

// Router
app.post('/checkout/done', (req, res) => {
  submitForm(req.session_id, req.body, (err, data) => {
    if(err) {
      res.status(400).send('Unable to process your purchase :(')
    } else {
      res.status(201).json(data)
    }
  })
})

app.get('/checkout', (req, res) => {
  getUser(req.session_id, (err, data) => {
    if(err) {
      res.status(400).send('Error, we will fix it soon!')
    } else if(data.length === 0){
      console.log(data,'1111')
      res.status(200).end()
    } else {
      res.status(400).end()
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
