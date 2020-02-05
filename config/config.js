
module.exports = {
 "development": {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": "handyDB",
  "host": process.env.DB_HOST,
  "port": 3306,
  "dialect": "mysql"
},
"test": {
  "username": "root",
  "password": "RKW@1993!",
  "database": "handyDB",
  "host": "127.0.0.1",
  "port": 3306,
  "dialect": "mysql"
},
"production": {
  "username": "root",
  "password": "RKW@1993!",
  "database": "handyDB",
  "host": "127.0.0.1",
  "port": 3306,
  "dialect": "mysql"
}
}


