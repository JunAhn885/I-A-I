import express from 'express';
var router = express.Router();
import bcrypt from 'bcrypt';

// GET user info
router.get('/', async function(req, res, next) {
    try {
        let res = await req.models.User.findOne({_id: req.query.id});
        res.status(200).json({success: true, user: res}); 
    } catch (err) {
        console.log(err);
        res.status(500).json({success: false, error: err});
    }
    
})

// POST new user
router.post('/', async function(req, res, next) {
    console.log(req.body)
    try {
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new req.models.User({
            username: req.body.username,
            name: req.body.name,
            familyName: req.body.familyName,
            password: hashedPassword,
            salt: salt,
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
        res.status(200).json({success: true});
    } catch (err) {
        console.log(err);
        res.status(500).json({success: false, error: err});
    }
});

export default router;