const db =require('../config/mongoose');
const List = require('../models/todo_list');
module.exports.delete =function(req,res){
    const eventId=req.body.event;
    List.findByIdAndDelete(eventId,function(err){
        if(err){console.log('the event is not found');
       return; }
       return res.redirect('back');
    })
    
}