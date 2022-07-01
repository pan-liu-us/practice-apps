const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/glossary',
                 {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
          console.log('MANGO CONNECTION OPEN!!')
        })
        .catch((err) => {
          console.log('OH ERROR ABOUT MANGO CONNECTION!!');
          console.log(err)
        })

// Test if Mango works in mongoDB: db.glossaries.find()
// Clear the collection: db.glossaries.remove({})