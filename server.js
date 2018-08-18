const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8080;

app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'uploads/screenshoots')));


app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(port, function(){
    console.log("Sever is listening in port 8080")
});