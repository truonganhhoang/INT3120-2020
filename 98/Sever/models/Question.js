exports.add = function (req, con) {

  var name = req.body.Q_name;
  var category = req.body.Q_category;
  var title = req.body.Q_title;
  var Q1 = req.body.Q_1;
  var Q2 = req.body.Q_2;
  var Q3 = req.body.Q_3;
  var Q4 = req.body.Q_4;
  var Q_check = req.body.Q_check;
  var Q_suggest = req.body.Q_suggest;


  var sql = "INSERT INTO questions (Q_category_id, Q_name,Q_title,Q_1,Q_2,Q_3,Q_4,Q_check,Q_suggest) VALUES (?,?,?,?,?,?,?,?,?)";
  con.query(sql, [category, name, title, Q1, Q2, Q3, Q4, Q_check, Q_suggest], function (err, result) {
    if (err) throw err;


  });


}

exports.listCategoriesId = function (con, cb) {
  con.query("SELECT QC_id,QC_name FROM question_categories", function (err, result, fields) {
    if (err) throw err;

    cb(result)

  });

}

exports.list = function (con, category, id, cb) {
  if (id != "" && category != "")
    var query = "SELECT * FROM questions WHERE Q_category_id=? AND Q_id =?";
  else if (id == "" && category != "")
    var query = "SELECT * FROM questions WHERE Q_category_id=? ";
  else {
    var query = "SELECT * FROM questions";
  }

  var temp = con.query(query, [category, id], function (err, result, fields) {
    if (err) throw err;
    cb(result)
  });


}
exports.delete = function (id, con) {

  var sql = "DELETE FROM questions  WHERE Q_id=?";
  con.query(sql, [id], function (err, result) {
    if (err) throw err;

  });

}

exports.change=function(req,con)
{
  var id=req.body.Q_id;
  var name = req.body.Q_name;
  var category = req.body.Q_category;
  var title = req.body.Q_title;
  var Q1 = req.body.Q_1;
  var Q2 = req.body.Q_2;
  var Q3 = req.body.Q_3;
  var Q4 = req.body.Q_4;
  var Q_check = req.body.Q_check;
  var Q_suggest = req.body.Q_suggest;

 
  
      var sql = "UPDATE questions SET Q_category_id=?, Q_name=?,Q_title=?,Q_1=?,Q_2=?,Q_3=?,Q_4=?,Q_check=?,Q_suggest=? WHERE Q_id=?";
      con.query(sql,[category,name,title,Q1,Q2,Q3,Q4,Q_check,Q_suggest,id], function (err, result) {
       if (err) throw err;

      });
    
}