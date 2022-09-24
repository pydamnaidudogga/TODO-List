const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/todo_list_db');
const db=mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting the db'));
db.once('open',function(){
    console.log('success in connecting the data base');
});