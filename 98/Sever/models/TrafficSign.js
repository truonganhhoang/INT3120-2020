const mkdirp = require('mkdirp');

exports.add=function(req,con)
{
   
    if(req.files)
    {
       var file =req.files.TFS_file;
       var filename= file.name;
        var name = req.body.TFS_name;
        var category = req.body.TFS_category;
        var content =  req.body.TFS_content;
        mkdirp.sync('./public/images/trafficsigns/'+category);
        file.mv("./public/images/trafficsigns/"+category+"/"+filename);
        
        var sql = "INSERT INTO trafficsigns (tfs_category_id, tfs_name,tfs_image,tfs_content) VALUES (?,?,?,?)";
        con.query(sql,[category,name,"/public/images/trafficsigns/"+category+"/"+filename,content], function (err, result) {
         if (err) throw err;
    

  });
  
    }
}


exports.list=function(con,id,cb)
{
  if(id!="")
  var query="SELECT * FROM trafficsigns WHERE tfs_id =?";
  else
  {
    var query="SELECT * FROM trafficsigns";
  }
    var temp= con.query(query,id, function (err, result, fields) {
        if (err) throw err;
        cb(result)
      });
    

}

exports.listCategoriesId=function(con,cb)
{
     con.query("SELECT tfsc_id,tfsc_name FROM trafficsign_categories", function (err, result, fields) {
        if (err) throw err;
       
        cb(result)

      });
     
}


exports.change=function(req,con)
{
  var id = req.body.TFS_id;
  var name = req.body.TFS_name;
  var category = req.body.TFS_category;
 var content =  req.body.TFS_content;
console.log(id,name,category,content)
    if(req.files)
    {
       var file =req.files.TFS_file;
       var filename= file.name;
        file.mv("./public/images/trafficsigns/"+category+"/"+filename);
        var sql = "UPDATE trafficsigns SET tfs_category_id=?, tfs_name=?,tfs_image=?,tfs_content=? WHERE tfs_id=?";
        con.query(sql,[category,name,"/public/images/trafficsigns/"+category+"/"+filename,content,id], function (err, result) {
         if (err) throw err;
       

  });
  
    }
    else
    {
      var sql = "UPDATE trafficsigns SET tfs_category_id=?, tfs_name=?,tfs_content=? WHERE tfs_id=?";
      con.query(sql,[category,name,content,id], function (err, result) {
       if (err) throw err;

      });
    }
}

exports.delete=function(id,con)
{
    
      var sql = "DELETE FROM trafficsigns  WHERE tfs_id=?";
      con.query(sql,[id], function (err, result) {
       if (err) throw err;
     
      });
    
}