  const db = require('../config/mongoose');
    
  const List =require('../models/todo_list');

module.exports.eventlist = function(req,res){

    List.create({
             eventdescription:req.body.event_info,
             category:req.body.event_category,
             duedate:req.body.due_date
                } ,function(err,newlist){
        if(err){console.log('error in create the contact');
    return ;}
    console.log('********',newlist);
    return res.redirect('back');
     });
}