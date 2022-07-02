const db = require("../db.js");

module.exports.submitForm = (id, body, cb) => {
  const { name , email , password, address1, address2, city, state, addressZip, cardNumber,cardExp, cardCvv, billingZip } = body
  const q = `INSERT INTO formData (sessionId, name , email , password, address1, address2, city, state, addressZip, cardNumber,cardExp, cardCvv, billingZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  db.query(q,[id, name , email , password, address1, address2, city, state, addressZip, cardNumber,cardExp, cardCvv, billingZip], (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(null, data)
    }
  })
}

module.exports.getUser = (id, cb) => {
  const q = `SELECT * FROM formData where sessionId=?`
  db.query(q, [id], (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(null, data)
    }
  })
}

