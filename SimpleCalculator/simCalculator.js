const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/simCalculator', function(req, res) {

    var qry = req.query;
    var nm1 = parseInt(qry.num1);
    var nm2 = parseInt(qry.num2);
    var mOperation = qry.mOperation;

    var output;

    if(mOperation == 'addition'){
        output = nm1 + nm2;
    }else if(mOperation == 'subtraction'){
        output = nm1 - nm2;
    }else if(mOperation == 'multiplication'){
        output = nm1 * nm2;
    }else{
        output = nm1/nm2;
    }

    res.render('resultPage', {answer: output});

})


app.listen(8000, function(req, res) {
    console.log("The Server Is Running!");
});