import e from 'express';
import express from 'express';
var router = express.Router();


router.get('/', async function(req, res, next) {
    try {
        let thisSession = req.session;
        if (this.Session.isAuthenticated) {
            const user = await req.models.User.find({_id: thisSession.account.username});
            const family = await req.models.Family.find({_id: user.family});
            let events = [];
            family.events.forEach(async (event) => {
                const fullEvent = await req.models.Event.find({_id: event});
                events.push(fullEvent);
            });
            res.json(events);
        } else {
            res.send('Error: You must be logged in to view your family events');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({status: "error", "error": err});
    }  
});

router.post('/', async function(req, res, next) {
    try {
        let thisSession = req.session;
        if (thisSession.isAuthenticated) {
            const user = await req.models.User.find({_id: thisSession.account.username});
            const family = await req.models.Family.find({_id: user.family});
            const newEvent = await req.models.Event.create({
                postedBy: user._id,
                family: family._id,
                title: req.body.title,
                date: Date.now(),
                location: req.body.location,
                description: req.body.description,
                //need to add media(image) field
            });
            await newEvent.save();
            family.events.push(newEvent._id);
            res.json({status: "success"});
        } else {
            res.send('Error: You must be logged in to post to the family log');
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({status: "error", "error": err});
    }
});

router.delete('/', async function(req, res, next) {
    try {
        let thisSession = req.session;
        if (thisSession.isAuthenticated) {
            const user = await req.models.User.find({_id: thisSession.account.username});
            const event = req.query.eventId;
            const index = family.events.indexOf(event);
            if (index > -1) {
                user.events.splice(index, 1);
                await user.save();    
            }
            await req.models.Event.findOneAndDelete({_id: event});
            res.json({status: "success"});
        } else {
            res.send('Error: You must be logged in to delete a post');
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({status: "error", "error": err});
    }
});

export default router;