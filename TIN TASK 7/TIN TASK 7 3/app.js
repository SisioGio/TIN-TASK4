var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');


// for parsing application/json
app.use(express.json()); 
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {

        res.render('pages/index');
   
  
  
});

app.post('/',function(req,res){
    console.log(req.body)
        res.render('pages/verification',{
            name:req.body.name,
            surname:req.body.surname,
            email: req.body.email,
            password:req.body.password,
            repeatpassword:req.body.repeatpassword
        
        
        });
   
})


app.listen(8080);
console.log('Server is listening on port 8080');