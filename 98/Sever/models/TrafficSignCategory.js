const mkdirp = require('mkdirp');

exports.add=function(req,res,con)
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
         res.send("Thành công");

  });
  
    }
}

exports.list=function(con,res)
{
    var temp= con.query("SELECT * FROM trafficsign_categories", function (err, result, fields) {
        if (err) throw err;
        var test = 
        {
            data:result
        }
        res.send( test );
      });

    

}
