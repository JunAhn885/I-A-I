import e from 'express';
import express from 'express';
var router = express.Router();

//api/events/
//get all events related to the family that the user is a member of
//filters on date => req.date
router.get('/', async function(req, res, next) {
    try {
        if (req.query.id) {
            let user = await req.models.User.findOne({_id: req.query.id})
            let family = await req.models.Family.findOne({_id: user.family});
            let allEvents = [];
            for (const event of family.events) {
                let fullEvent = await req.models.Event.findOne({_id: event});
                if (fullEvent.date.getMonth() == req.query.month && fullEvent.date.getFullYear() == req.query.year) {
                        allEvents.push(fullEvent);    
                    }
            };
            res.json(allEvents);
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
        if (req.body.id) {
            let user = await req.models.User.findOne({_id: req.body.id})
            let family = await req.models.Family.findOne({ _id: user.family });
            const newEvent = await req.models.Event.create({
                postedBy: req.body._id,
                family: family._id,
                title: req.body.title,
                date: Date.now(),
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
        if (thisSession.user) {
            const user = await req.models.User.find({_id: thisSession.user.username});
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