var db = require("../models");

module.exports = function (app) {
  app.get("/api/handy", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Handy.findAll({
      include: [db.Post]
    }).then(function (dbHandy) {
      res.json(dbHandy);
    });
  });

  app.get("/api/handy/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Handy.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function (dbHandy) {
      res.json(dbHandy);
    });
  });

  app.post("/api/handy", function (req, res) {
    db.Handy.create(req.body).then(function (dbHandy) {
      res.json(dbHandy);
    });
  });

  app.delete("/api/handy/:id", function (req, res) {
    db.Handy.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbHandy) {
      res.json(dbHandy);
    });
  });
  

};