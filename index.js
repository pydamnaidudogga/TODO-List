// first of all install the npm init.
// the install express.
// set port to 8000.

const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const List = require('./models/todo_list');
//  start the express server
const app = express();
// to use the routes file
app.use(express.urlencoded());
app.use('/',require('./routers'));
// install view engine and set the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('assets'));







app.listen(port,function(err){
    if(err){console.log('Error in running the surver :',err);}
    console.log(`great the surver is running with port : ${port}`);
})