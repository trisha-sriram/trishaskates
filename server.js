var express = require('express');
var parser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

app.use(express.static('public'));

/** use static html then use the code below

//app.use('/assets', express.static('assets'));
/*app.get('/', function (req, res) {
   res.send('Hello World');
})*/

// index page 
app.get('/', function(req, res) {
    res.render('pages/app');
});

// og about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// ollie page 
app.get('/ollie', function(req, res) {
    res.render('pages/ollie');
});

//50-50s page
app.get('/50s50s', function(req, res) {
    res.render('pages/50s50s');
});

//Backside 180's page
app.get('/backside', function(req, res) {
    res.render('pages/backside');
});

//Boardslide page
app.get('/boardslide', function(req, res) {
    res.render('pages/boardslide');
});

//Frontside 180's page
app.get('/frontside', function(req, res) {
    res.render('pages/frontside');
});

//Heelflip page
app.get('/heelflip', function(req, res) {
    res.render('pages/heelflip');
});

//Kickflip page
app.get('/kickflip', function(req, res) {
    res.render('pages/kickflip');
});

//Pop Shove page
app.get('/popshove', function(req, res) {
    res.render('pages/popshove');
});

//Shuvit page
app.get('/shuvits', function(req, res) {
    res.render('pages/shuvits');
});

//Varial page
app.get('/varial', function(req, res) {
    res.render('pages/varial');
});

//Home page
app.get('/app', function(req, res) {
    res.render('pages/app');
});

/*app.get('/contact', function(req, res) {
    res.render('pages/contact');
});*/

app.get('/contact',function(req,res){
    res.render('pages/contact',{
        topicHead : 'Any Questions?',
    });
    console.log('user accessing contact page');
});
app.post('/contactsubmit',function(req,res){
    var data = {
        first : req.body.fname,
        last : req.body.lname,
        email : req.body.email,
        message : req.body.msg
    }
    console.log(data);
    res.render('pages/contactsubmit',{
        userValue : data,
        topicHead : 'Submission Received'
    });
    //res.json(student);
     
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

