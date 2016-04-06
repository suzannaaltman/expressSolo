var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var balance = require('./modules/balance')
var port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/balance', function(req, res){
  res.send(balance.textLabel() + balance.randomDollars());
});

app.post('/', function(req, res){
  console.log('something posted');
});


app.listen(port, function(){
  console.log('Listening for requests on port', port);
});
