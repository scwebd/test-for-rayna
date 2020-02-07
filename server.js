const dotenv = require("dotenv");
dotenv.config();
// *** Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("./config/passport");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

const mypassword = process.env.DB_PASSWORD
console.log(mypassword)

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

require("./routes/passport-html-routes.js")(app);
require("./routes/passport-api-routes")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});