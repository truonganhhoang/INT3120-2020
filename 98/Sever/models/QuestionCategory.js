exports.add = function (req, con) {

    var name = req.body.QC_name;
    var content = req.body.QC_content;
    var button = req.body.QC_button;
    var color = req.body.QC_color;

    var sql = "INSERT INTO question_categories ( QC_name,QC_content,QC_button,QC_color) VALUES (?,?,?,?)";
    con.query(sql, [name, content,button,color], function (err, result) {
        if (err) throw err;
    });


}