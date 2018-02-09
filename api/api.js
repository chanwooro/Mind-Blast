//Connect + Open database
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./database.db');

exports.getAllQuestion = function(req, res){
    var query = 'SELECT id, name FROM user_questions';
    var result = '';
    db.all(query, function(err, row){
        res.json(row);
        console.log(__dirname);
    });
    console.log('Contents Successfully loaded');
}

exports.getSingleQuestion = function(req, res){
    var id = req.params.id;
    var query = `SELECT id, name FROM user_questions WHERE id=${id}`;
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

exports.createNewQuestion = function(req, res){
    var contents = req.body.contents ? req.body.contents : ''; 
    var query = db.run(`INSERT INTO user_questions (name) VALUES ("${contents}")`);
    console.log(contents);
    res.json("New contents created");
}

exports.updateContents = function(req, res){
    var data = req.body;
    var result;
    var query = `UPDATE user_questions SET name = "${data.contents}" WHERE id = ${req.params.id}`;
    db.run(query, function(err, row){
        if(err){
            result = err;
        }else{
            result = row;
        }
        res.json(result);
    });
}

exports.createTables = (req, res) => {
    console.log('test');
    var query = 'CREATE TABLE IF NOT EXISTS user_folders (id integer PRIMARY KEY AUTOINCREMENT, folder_name text NOT NULL)';
    db.run(query);
    conosle.log('test');
    res.json('table is created successfully');
}

exports.createUserFolder = (req, res) => {
    
    var contents = req.body.folderName ? req.body.folderName : '';
    console.log(contents)
    var result;
    var query = `INSERT INTO user_folders (folder_name) VALUES ("${contents}")`;
    db.run(query, (err,row) =>{
        if(err){
            result = err;
        }else{
            result = row;
        }
        console.log(result);
        res.json(result);
    });
}