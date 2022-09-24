const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
     eventdescription: {
            type:String,
            require:true
              },
    
    category : {
        type:String,
        require:true

           },
    duedate: {
        type:String,
        require:true
    }      
})
 const List = mongoose.model('List',listSchema);
 module.exports =List;
