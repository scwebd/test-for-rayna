// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function (data) {
        res.json(data)
        // res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  var db = require("../models");
  app.get("/api/posts", function (req, res) {
    var query = {};
    if (req.query.author_id) {
      query.UserId = req.query.user_id;
    }
    // 1. Add a join here to include all of the Authors to these posts
    db.Post.findAll({
      where: query,
      include: [db.User]
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {

    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function (dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function (req, res) {
    db.Post.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function (req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbPost) {
        res.json(dbPost);
      });
  });

  //test route 
  app.post("/api/signup", function (req, res) {
    console.log(req.body.test)
    res.json({ message: "server respons" })
    db.User.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  })
//login
//in the req object express you iwll have access to the-req.user.id

app.post("/api/login", function(req, res) {
  console.log(req.user.id)
  res.json({ message: "server respons" })
  db.User.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
});

app.post("/api/logout", function (req, res) {
  console.log(req.user.id)
  res.json({ message: "server respons" })
  db.User.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  })
})

};
  






