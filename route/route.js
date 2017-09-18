
module.exports = function(app){
    //Encoder, NEEDED
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    /*--------LOAD DEFAULT PAGE--------*/
    app.get('/', function(req, res){
        try{
            res.sendfile('index.html');
        }catch (err){
            console.log(err);
        }       
    });
    /*----------------*/

    var api = require('../api/api');
    
    //Simple get || Fetch All Data
    app.get('/api/contents/', api.getAllContents);
    //Simple GET || Fetch single data
    app.get('/api/contents/:id', api.getSingleContents);
    //Simple POST
    app.post('/api/contents/new/', api.createNewContents)
    //Simple UPDATE
    app.put('/api/contents/:id', api.updateContents);
    

}