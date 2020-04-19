exports.add = function (req, con) {

    var name = req.body.QC_name;
    var content = req.body.QC_content;
    var button = req.body.QC_button;
    var color = req.body.QC_color;

    var sql = "INSERT INTO question_categories ( QC_name,QC_content,QC_button,QC_color) VALUES (?,?,?,?)";
    con.query(sql, [name, content, button, color], function (err, result) {
        if (err) throw err;
    });


}

exports.list = function (con, id, cb) {

    if (id != "")
        var query = "SELECT * FROM question_categories WHERE QC_id =?";
    else {
        var query = "SELECT QC.*,(SELECT COUNT(Q.Q_id) FROM questions Q  WHERE Q.Q_category_id = QC.QC_id) AS QC_count FROM question_categories QC WHERE (SELECT COUNT(Q.Q_id) FROM questions Q  WHERE Q.Q_category_id = QC.QC_id)>0";
    }
    var temp = con.query(query, id, function (err, result, fields) {
        if (err) throw err;
        cb(result)
    });



}
exports.delete = function (id, con) {

    var sql = "DELETE FROM question_categories  WHERE QC_id=?";
    con.query(sql, [id], function (err, result) {
        if (err) throw err;

    });

}

exports.change = function (req, con) {
    var id = req.body.QC_id;
    var name = req.body.QC_name;
    var content = req.body.QC_content;
    var button = req.body.QC_button;
    var color = req.body.QC_color;

    var sql = "UPDATE question_categories SET QC_name=?,QC_content=?,QC_button=?,QC_color=? WHERE QC_id=?";
    con.query(sql, [name, content,button,color, id], function (err, result) {
        if (err) throw err;

    });

}