const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded());

app.listen(PORT, function(err){
    if(err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

app.get('/', function (req, res, next) {
    fs.readFile('/file-does-not-exist', function (err, data) {
        if(err){
            next(err)
        }else{
            res.send(data)
        }
    })
})

app.get('/add-product', (req, res, next) => {
    console.log('In the middleware');
    res.send('<form action="/product" method="post"><input name="title"><button>Submit</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>You submitted successfully</h1>');
});

app.use(function(err, req, res, next) {
    res.status(500).send('Something broke!');
});