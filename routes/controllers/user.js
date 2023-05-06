import express from 'express';
var router = express.Router();

// GET user info to be used throught the whole application
router.get('/', async function(req, res, next) {
    let thisSession = req.session;
    if (thisSession.user){
        res.json({
            status: "loggedin",
            userInfo: {
                name: thisSession.account.name,
                username: thisSession.account.username
            }
        })
    } else {
        res.json({ status: "loggedout" });
    }
})

export default router;