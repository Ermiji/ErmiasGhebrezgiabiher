const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Your server is running on 3000');
})

app.use('/add', (req, res, next) => {
    console.log('In the middleware!');
});

app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>The "Add Product" Page</h1>');
    next();
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>');
    next();
});