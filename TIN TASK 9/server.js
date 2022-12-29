const express = require('express')
const cookieParser = require('cookie-parser')
const LocalStorage = require('node-localstorage').LocalStorage
const session = require("express-session");
const app = express()
localStorage = new LocalStorage('./scratch');
// let’s you use the cookieParser in your application
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: "amar",
    saveUninitialized: true,
    resave: true
}));
app.get('/', (req, res) => {
    res.render('index')
});


app.post('/form', (req, res) => {
    const longTermCookie = req.body.longTermCookie
    const sessionCookie = req.body.sessioncookie
    const sessionVariable = req.body.sessionVariable

    req.session.sessionVariable = sessionVariable;
    res.cookie('longTermCookie', longTermCookie, { maxAge: 900000 });
    res.cookie("sessioncookie",sessionCookie)
    res.render('showData');
});

app.get('/form', (req, res) => {

   
    console.log("Getting data...")
    
    res.render('showData');
});
app.get('/getcookie', (req, res) => {
    //show the saved cookies
    console.log(req.cookies)
    res.send(req.cookies);
});

//server listening to port 8000
app.listen(8000, () => console.log('The server is running port 8000...'));