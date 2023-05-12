import e from 'express';
import express from 'express';
var router = express.Router();

//api/events/
//get all events related to the family that the user is a member of
//filters on date => req.date
router.get('/', async function(req, res, next) {
    try {
        let thisSession = req.session;
        if (req.user) {
            const user = await req.models.User.find({username: req.user.username});
            const family = await req.models.Family.find({_id: req.user.family});
            let events = [];
            for (const event of family.events) {
                const fullEvent = await req.models.Event.find({_id: event});
                fullEvent = fullEvent[0];
                if (fullEvent.date.getFullYear() == req.query.year &&
                    fullEvent.date.getMonth() == req.query.month &&
                    fullEvent.date.getDate() == req.query.day) {
                        posts.push(fullEvent);    
                    }
            };
            res.json(events);
        } else {
            res.send('Error: You must be logged in to view your family events');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({status: "error", "error": err});
    }  
});

router.post('/add-log', async function (req, res, next) {
    try {
        let thisSession = req.session;
        if (req.user) {
            let family = await req.models.Family.find({ _id: req.user.family });
            family = family[0];
            const newEvent = await req.models.Event.create({
                postedBy: req.user._id,
                family: family._id,
                title: req.body.eventName,
                date: req.body.date,
                location: req.body.location,
                description: req.body.notes,
                //need to add media(image) field
            });
            await newEvent.save();
            if (!family.events) {
                family.events = [];
            }
            family.events.push(newEvent._id);
            family.save();
            res.json({ status: "success" });
        } else {
            res.send('Error: You must be logged in to post to the family log');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "error", "error": err});
    }
});

router.delete('/', async function(req, res, next) {
    try {
        let thisSession = req.session;
        if (req.user) {
            const user = await req.models.User.find({_id: req.user.username});
            const event = req.body.eventId;
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