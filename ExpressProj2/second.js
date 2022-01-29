const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.listen(3000, () => {
    console.log('Your server is running on 3000');
});

app.use(bodyParser.urlencoded());

app.use('/add-product', (req, res, next) => {
    console.log('In the middleware! ');
    res.send('<form action="/product" method="post"><input name="title"><button type="submit">Submit</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

/*const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username)
})

app.post('/api/users', jsonParser, function (req, res) {
    //req.body
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));*/