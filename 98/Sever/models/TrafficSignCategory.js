const mkdirp = require('mkdirp');

exports.add=function(req,con)
{
   
    if(req.files)
    {
       var file =req.files.TFSC_file;
       var filename= file.name;
        var name = req.body.TFSC_name;
        var content =  req.body.TFSC_content;
        mkdirp.sync('./public/images/Categories/');
        file.mv("./public/images/Categories/"+filename);
        
        var sql = "INSERT INTO trafficsign_categories ( tfsc_name,tfsc_image,tfsc_content) VALUES (?,?,?)";
        con.query(sql,[name,"/public/images/Categories/"+filename,content], function (err, result) {
         if (err) throw err;
 

  });
  
    }
}
exports.change=function(req,con)
{
  var id = req.body.TFSC_id;
  var name = req.body.TFSC_name;
  var content =  req.body.TFSC_content;
    if(req.files)
    {
       var file =req.files.TFSC_file;
       var filename= file.name;
      file.mv("./public/images/Categories/"+filename);
      var sql = "UPDATE trafficsign_categories SET tfsc_name=?, tfsc_image=?, tfsc_content=? WHERE tfsc_id=? ";
        con.query(sql,[name,"/public/images/Categories/"+filename,content,id], function (err, result) {
         if (err) throw err;

  });
  
    }
    else
    {
      var sql = "UPDATE trafficsign_categories SET tfsc_name=?,tfsc_content=? WHERE tfsc_id=?";
      con.query(sql,[name,content,id], function (err, result) {
       if (err) throw err;

});
    }
}
exports.list=function(con,id,cb)
{

 if(id!="")
  var query="SELECT * FROM trafficsign_categories WHERE tfsc_id =?";
  else
  {
    var query="SELECT * FROM trafficsign_categories";
  }
    var temp= con.query(query,id, function (err, result, fields) {
        if (err) throw err;
        cb(result)
      });

    

}

exports.delete=function(id,con)
{
    
      var sql = "DELETE FROM trafficsign_categories  WHERE tfsc_id=?";
      con.query(sql,[id], function (err, result) {
       if (err) throw err;
     
      });
    
}