var express = require('express');
var app = express();

app.set('view engine', 'ejs');

/** use static html then use the code below
//app.use(express.static('public'));
//app.use('/assets', express.static('assets'));
/*app.get('/', function (req, res) {
   res.send('Hello World');
})*/

// index page 
app.get('/', function(req, res) {
    res.render('pages/app');
});

// about page 
app.get('/ollie', function(req, res) {
    res.render('pages/ollie');
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

