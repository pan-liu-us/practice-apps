const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS formData (
        sessionId VARCHAR(255),
        name VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255),
        address1 VARCHAR(255),
        address2 VARCHAR(255),
        city VARCHAR(255),
        state VARCHAR(255),
        addressZip INT,
        cardNumber BIGINT,
        cardExp VARCHAR(255),
        cardCvv INT,
        billingZip INT,
        PRIMARY KEY (sessionId)
      )`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
