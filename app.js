const express = require('express');
const authRoute = require('./routes/auth-routes');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

// setting up view engine 
app.set('view engine', 'ejs');


//auth routes are here
app.use('/auth', authRoute);

// creating homepage route
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// listen to a port
app.listen(3000,function(){
    console.log('listening to port @ 3000');
})