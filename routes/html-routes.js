// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/test", function (req, res) {
    res.render("index", { message: "hi" });
  });

  // cms route loads cms.html
 rayna_dev
  app.get("/cms", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/layouts/cms.html"));
  });
  app.get("/login", function (req, res) {
    res.render("login", { message: "yo" });
  });
  app.get("/contact", function (rea, res) {
    res.render("contact", { message: "hi" });
  });

=======
  app.get("/cms", function(req, res) {
    // res.sendFile(path.join(__dirname, "../views/layouts/cms.html"));
    res.render("cms" , {message:"hi" });
  });
  app.get("/login", function(req, res) {
    res.render("login", {message: "yo"});
  })

  app.get("/", function(req, res) {
    const myObjToSendToFront = {
      profile: [
        {
          bizName: "Teddy",
          Email: "teddy@email.com",
          Phone_number: "303-555-1234",
          zipCode: "80203",
          city : "Denver"
        },
        {
          bizName: "John",
          Email: "Smith",
          Phone_number: "404-555-1234",
          zipCode: "90210",
          city : "Beverly Hills"
        }
      ]
    }
    res.render("cityView" , myObjToSendToFront);
  });
 master
  // blog route loads blog.html
  // app.get("/handy", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/handy.html"));
  // });

  // // authors route loads author-manager.html
  // app.get("/authors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });

};