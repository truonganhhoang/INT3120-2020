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
app.listen(3000,function()
{
  console.log("hello");
})
app.set("view engine","ejs");
app.set("views","./views/pages");
//End use
//End setting


//Models
var TFS=require('./models/TrafficSign');
var TFSC=require('./models/trafficSignCategory');
var mySQL=require('./models/MySQL');

//End models
//Use model
var con= mySQL.conn();
//End use
//Route
app.get("/",function(req,res)
{

  res.send("ok");
 
})

app.get("/admin",function(req,res)
{
  res.render("admin/admin");
})

//Admin traffic signs
app.get("/admin/trafficsigns",function(req,res)
{
  
  res.render("admin/TrafficSigns/listTrafficSigns");
})

app.get("/admin/addtrafficsigns",function(req,res)
{
TFS.listCategoriesId(con,function(result)
{
 res.render("admin/TrafficSigns/addtrafficsigns",{result});
})
 
});

app.get("/admin/trafficsigns/json/:name",function(req,res)
{
  var category=req.params.name;
  TFS.list(con,res,category);
});




app.post('/admin/addtrafficsigns', (req, res) => {
 
  TFS.add(req,res,con);

});
//////////////

//Admin traffic signs categories
app.get("/admin/trafficsignCategories",function(req,res)
{
  res.render("admin/trafficsignCategories/listtrafficsignCategories");
})
app.get("/admin/addtrafficsignCategories",function(req,res)
{
  res.render("admin/trafficsignCategories/addtrafficsignCategories");
})

app.get("/admin/trafficsignCategories/json/",function(req,res)
{

//res.send('User name có tên: '+ req.params.name);
  TFSC.list(con,res);
})
app.post('/admin/addtrafficsignCategories', (req, res) => {
 
  TFSC.add(req,res,con);

});
//////////////

//End route
//End main