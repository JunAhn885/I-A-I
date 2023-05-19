import express from 'express';
var router = express.Router();

// GET user info
router.get('/', async function(req, res, next) {
    let thisSession = req.session;
    if (thisSession.user){
        res.json({
            status: "loggedin",
            userInfo: {
                name: thisSession.user.name,
                username: thisSession.user.username
            }
        })
    } else {
        res.json({ status: "loggedout" });
    }
})

// POST new user
router.post('/new', async function(req, res, next) {
    try {
        const newUser = new req.models.User({
            username: req.body.username,
            name: req.body.name,
            familyName: req.body.familyName,
            password: req.body.password,
        });
        const newFamily = new req.models.Family({
            name: req.body.familyName,
            members: [newUser._id],
        });
        newUser.family = newFamily._id;
        await newUser.save();
        await newFamily.save();
        req.session.user = newUser;
        req.session.save();
        res.json({success: true});
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;