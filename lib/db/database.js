const mysql = require('mysql')
const config = require('./dbsetting')

class Database {
  constructor () {
    this.connection = mysql.createConnection(config)
  }

  query (sql) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (err, rows) => {
        if (err) { return reject(err) }
        resolve(rows)
      })
    })
  }

  close () {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) { return reject(err) }
        resolve()
      })
    })
  }
}

module.exports = Database
