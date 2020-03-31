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
var TFS=require('./models/trafficsSign');
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
  res.render("admin/TrafficSigns/addtrafficsigns");
})

app.get("/admin/trafficsigns/json",function(req,res)
{
  TFS.list(con,res);
})
app.post('/admin/addtrafficsigns', (req, res) => {
 
  TFS.add(req,res,con);

});
//////////////

//End route
//End main