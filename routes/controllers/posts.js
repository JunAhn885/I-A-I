import express from 'express';
var router = express.Router();

//api/posts/
//GET all public posts related to the faimly that the user is a member of
//filters on date => req.date
router.get('/', async function(req, res, next) {
    try {
        let thisSession = req.session;
        if (thisSession.passport.user) {
            const user = await req.models.User.find({username: thisSession.account.username});
            //const family = await req.models.Family.find({_id: user.family});
            let posts = [];
            family.posts.forEach(async (post) => {
                const fullPost = await req.models.Event.find({_id: post, date: req.date});
                posts.push(fullPost);
            });
            res.json(posts);
        } else {
            res.send('Error: You must be logged in to view your family log');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({status: "error", "error": err});
    }
});

//POST a new post to the public family log
router.post('/add-gratitude-post', async function(req, res, next) {
    try {
        let thisSession = req.session;
        if (thisSession.passport.user) {
            const family = await req.models.Family.find({_id: user.family});
            const newPost = new req.models.Post({
                postedBy: thisSession.account.username,
                title: req.body.title,
                date: Date.now(),
                content: req.body.content,
                emoji: req.body.emoji,
            });
            await newPost.save();
            family.posts.push(newPost._id);
            res.json({status: "success"});
        } else {
            res.send('Error: You must be logged in to post to the family log');
        }
    } catch(err) {
        res.send("error!!!!!!!!!!!!!!!!!")
    }
});

// DELETE a post from the public family log
router.delete('/', async function(req, res, next) {
    try {
        let thisSession = req.session;
        if (thisSession.passport.user) {
            let user = await req.models.User.find({username: req.session.account.username});
            let family = await req.models.Family.find({_id: user.family});
            let post = req.query.postId;
            let index = family.posts.indexOf(post);
            if (index > -1) {
                user.posts.splice(index, 1);
                await user.save();
            }
            await req.models.Post.findOneAndDelete({_id: post});    
        } else {
            res.send('Error: You must be logged in to delete a post');
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({status: "error", "error": err});
    }
});

//GET all private posts related to the user
router.get('/private', async function(req, res, next) {
    try{
        let thisSession = req.session;
        if (thisSession.passport.user) {
            const user = await req.models.User.find({username: thisSession.account.username});
            let posts = [];
            user.posts.forEach(async (post) => {
                const fullPost = await req.models.Event.find({_id: post});
                posts.push(fullPost);
            });
            res.json(posts);
        } else {
            res.send('Error: You must be logged in to view your private log');
        }

    } catch(err){
        console.log(err);
        res.status(500).json({status: "error", "error": err});
    }
});

//POST a new post to the private family log
router.post('/private', async function(req, res, next) {
    try {
        let thisSession = req.session;
        if (thisSession.passport.user) {
            const user = await req.models.User.find({username: thisSession.account.username});
            const newPost = new req.models.Post({
                postedBy: thisSession.account.username,
                title: req.body.title,
                date: Date.now(),
                content: req.body.content,
                emotion: req.body.emotion,
            });
            await newPost.save();
            user.posts.push(newPost._id);
            res.json({status: "success"});
        } else {
            res.send('Error: You must be logged in to post to the family log');
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({status: "error", "error": err});
    }
});

// DELETE a post from the private family log
router.delete('/private', async function(req, res, next) {
    try {
        let thisSession = req.session;
        if (thisSession.passport.user) {
            let user = await req.models.User.find({username: req.session.account.username});
            let post = req.query.postId;
            let index = user.posts.indexOf(post);
            if (index > -1) {
                user.posts.splice(index, 1);
                await user.save();
            }
            await req.models.Post.findOneAndDelete({_id: post});    
        } else {
            res.send('Error: You must be logged in to delete a private post');
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({status: "error", "error": err});
    }
});

export default router;