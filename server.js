var express = require('express');
var parser = require('body-parser');
var app = express();
var request = require('superagent')
var config = require('./config.json');
//console.log(config.username);
//var Mailchimp = require('mailchimp-api-v3')

//var mailchimp = new Mailchimp('7c3587371a05d1954e708b7b8ed5e5e8-us10');

app.set('view engine', 'ejs');
app.use(parser.urlencoded({ extended: true }))
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

var mailchimpInstance = config.mailchimpInstance,
    listUniqueId = config.listUniqueId,
    mailchimpApiKey = config.mailchimpapikey

app.post('/contactsubmit',function(req,res){
    request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer.from('any:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed',
          //'fname': req.body.fname,
          //'lname': req.body.lname,
          //'msg': req.body.msg
          'merge_fields': {
            'FNAME':req.body.fname,
            'LNAME':req.body.lname
            //'msg': req.body.msg
          }
        })
        .end(function(err, response) {
              //console.log(response);
              /*if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
              } else {
                res.send('Sign Up Failed :(');
              }*/
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
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
                    //res.send('Signed Up!');
              }
              else {
                res.send('Sign Up Failed :(');
              }

          });
    /*var data = {
        first : req.body.fname,
        last : req.body.lname,
        email : req.body.email,
        message : req.body.msg
    }
    console.log(data);
    res.render('pages/contactsubmit',{
        userValue : data,
        topicHead : 'Submission Received'
    });*/
    //res.json(student);
     
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

