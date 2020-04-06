//Main
//Setting
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const upload = require("express-fileupload");

//Use
const app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.use(upload());
app.listen(3000, function () {
  console.log("hello");
})
app.set("view engine", "ejs");
app.set("views", "./views/pages");
//End use
//End setting


//Models
var TFS = require('./models/TrafficSign');
var TFSC = require('./models/trafficSignCategory');
var mySQL = require('./models/MySQL');

//End models
//Use model
var con = mySQL.conn();
//End use
//Route
app.get("/", function (req, res) {

  res.send("ok");

})

app.get("/admin", function (req, res) {
  res.render("admin/admin");
})

//Admin traffic signs
app.get("/admin/trafficsigns", function (req, res) {

  TFS.list(con, "", function (result) {
    res.render("admin/TrafficSigns/list", { result });
  });


})

app.get("/admin/trafficsigns/add", function (req, res) {
  TFS.listCategoriesId(con, function (result) {
    res.render("admin/TrafficSigns/add", { result });
  })

});

app.get("/admin/trafficsigns/json/:name", function (req, res) {
  var id = req.params.name;
  TFS.list(con, id, function (result) {
    res.send(result);
  });
});
app.get("/admin/trafficsigns/change/:name", function (req, res) {
  var id = req.params.name;
  TFS.listCategoriesId(con, function (result) {
    TFS.list(con, id, function (result2) {
      res.render("admin/TrafficSigns/change", { result, result2 });
    });

  })
});

app.post('/admin/trafficsigns/change/:name', (req, res) => {
  TFS.change(req, con);
  res.redirect('/admin/trafficsigns');

});
app.get('/admin/trafficsigns/delete/:name', (req, res) => {
  var id = req.params.name;
  TFS.delete(id, con);
  res.redirect('/admin/trafficsigns');

});
app.post('/admin/trafficsigns/add', (req, res) => {

  TFS.add(req, con);
  res.redirect('/admin/trafficsigns');

});
//////////////

//Admin traffic signs categories
app.get("/admin/trafficsignCategories", function (req, res) {
  TFSC.list(con,"", function (result) {
    res.render("admin/trafficsignCategories/list", { result });
  });


})
app.get("/admin/trafficsignCategories/add", function (req, res) {
  res.render("admin/TrafficSignCategories/add");
})

app.get("/admin/trafficsignCategories/json/", function (req, res) {

  TFSC.list(con,"", function (result) {
    res.send(result);

  });

})
app.post('/admin/trafficsignCategories/add', (req, res) => {

  TFSC.add(req, con);
  res.redirect('/admin/trafficsignCategories');
});

app.get("/admin/trafficsignCategories/change/:name", function (req, res) {
  var id = req.params.name;

    TFSC.list(con, id, function (result) {

      res.render("admin/trafficsignCategories/change", { result });
    });


});
app.post('/admin/trafficsignCategories/change/:name', (req, res) => {
  TFSC.change(req, con);
  res.redirect('/admin/trafficsignCategories');

});
app.get('/admin/trafficsignCategories/delete/:name', (req, res) => {
  var id = req.params.name;
  TFSC.delete(id, con);
  res.redirect('/admin/trafficsignCategories');

});
//////////////

//End route
//End main