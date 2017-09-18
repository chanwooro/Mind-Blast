//Connect + Open database
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./database.db');

exports.getAllContents = function(req, res){
    var query = 'SELECT id, contents FROM playground';
    var result = '';
    db.all(query, function(err, row){
        res.json(row);
        console.log(__dirname);
    });
    console.log('Contents Successfully loaded');
}

exports.getSingleContents = function(req, res){
    var id = req.params.id;
    var query = `SELECT id, contents FROM playground WHERE id=${id}`;
    var result;
    db.get(query, function(err, row){
        if (typeof row === 'undefined'){
            result = 'Error: Content is empty or is not assgined';
            console.log('Error: Content is empty or is not assgined');
        }else{
            result = row;
            console.log("Load database contents id="+req.params.id);
        }
        res.json(result);     
    });
}

exports.createNewContents = function(req, res){
    var contents = req.body.contents ? req.body.contents : ''; 
    var query = db.run(`INSERT INTO playground (contents) VALUES ("${contents}")`);
    console.log(contents);
    res.json("New contents created");
}

exports.updateContents = function(req, res){
    var data = req.body;
    var result;
    var query = `UPDATE playground SET contents = "${data.contents}" WHERE id = ${req.params.id}`;
    db.run(query, function(err, row){
        if(err){
            result = err;
        }else{
            result = row;
        }
        res.json(result);
    });
}