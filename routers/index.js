const express = require('express');
const router =express.Router();
const homecontroller = require('../controllers/home_controller');

router.get('/',homecontroller.home);
const  addevent = require('../controllers/event_list');
router.post('/add_event',addevent.eventlist);
const deleteEvent =require('../controllers/eventDelete');
router.post('/event_delete',deleteEvent.delete);

module.exports =router;