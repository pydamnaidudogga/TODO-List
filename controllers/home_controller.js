const List = require('../models/todo_list');
module.exports.home =function(req,res){
    List.find({},function(err,eventslist){
        if(err){ console.log('Error in featching the eventslist');
    return; }
     
    return res.render('home',{
        title:"TODO-LIST",
        eventList:eventslist
    });
    })
    

}
