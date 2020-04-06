const mkdirp = require('mkdirp');

exports.add=function(req,res,con)
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
         res.send("Thành công");

  });
  
    }
}


exports.list=function(con,res,category)
{
    var temp= con.query("SELECT * FROM trafficsigns WHERE tfs_category_id =?",category, function (err, result, fields) {
        if (err) throw err;
        var test = 
        {
            data:result
        }
        res.send( test );
      });
    

}

exports.listCategoriesId=function(con,cb)
{
     con.query("SELECT tfsc_id,tfsc_name FROM trafficsign_categories", function (err, result, fields) {
        if (err) throw err;
       
        cb(result)

      });
     
}
