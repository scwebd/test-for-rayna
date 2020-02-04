require('dotenv').config();

module.exports = {
 "development": {
  "username": "root",
  "password": "RKW@1993!",
  "database": "handy",
  "host": "127.0.0.1",
  "port": 3306,
  "dialect": "mysql"
},
"test": {
  "username": "root",
  "password": "RKW@1993!",
  "database": "database_test",
  "host": "127.0.0.1",
  "port": 3306,
  "dialect": "mysql"
},
"production": {
  "username": "root",
  "password": "RKW@1993!",
  "database": "database_production",
  "host": "127.0.0.1",
  "port": 3306,
  "dialect": "mysql"
}
}

db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})