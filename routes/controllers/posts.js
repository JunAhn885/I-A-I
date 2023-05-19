import express from 'express';
var router = express.Router();

//api/posts/
//GET all public posts related to the faimly that the user is a member of
//filters on date => req.date
router.get('/', async function(req, res, next) {
    try {
        let thisSession = req.session;
        if (req.query.id) {
            let user = await req.models.User.findOne({_id: req.query.id});
            let family = await req.models.Family.findOne({_id: user.family});
            let allPosts = [];
            for (const post of family.posts) {
                let fullPost = await req.models.Post.find({_id: post});
                fullPost = fullPost[0];
                if (fullPost.date.getFullYear() == req.query.year &&
                    fullPost.date.getMonth() == req.query.month &&
                    fullPost.date.getDate() == req.query.day) {
                        console.log('pushing post')
                        allPosts.push(fullPost); 
                    }
            };
            res.json(allPosts);
        } else {
            res.send('Error: You must be logged in to view your family log');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({status: "error", "error": err});
    }
});

//POST a new post to the public family log
router.post('/add-post', async function(req, res, next) {
    try {
        if (req.body.id) {
            let user = await req.models.User.findOne({_id: req.body.id});
            let family = await req.models.Family.findOne({_id: user.family});
            console.log('making new post')
            const newPost = new req.models.Post({
                postedBy: req.body._id,
                family: family._id,
                title: req.body.title,
                type: req.body.type,
                date: req.body.date,
                content: req.body.content,
                emotion: req.body.emotion,
            });
            await newPost.save();
            console.log('new post saved')
            
            if (!family.posts) {
                family.posts = [];
            }
            console.log(family)
            family.posts.push(newPost._id);
            console.log(family)
            await family.save();
            res.json({status: "success"});
        } else {
            res.send('Error: You must be logged in to post to the family log');
        }
    } catch(err) {
        res.send(err);
    }
});

// DELETE a post from the public family log
router.delete('/', async function(req, res, next) {
    try {
        if (req.body.id) {
            let user = await req.models.User.findOne({_id: req.body.id});
            let family = await req.models.Family.findOne({_id: user.family});
            let post = req.body.postId;
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

//GET private posts related to the user by date
router.get('/private', async function(req, res, next) {
    try{
        if (req.query.id) {
            let user = await req.models.User.findOne({_id: req.body.id});
            let allPosts = [];
            for (const post of user.posts) {
                let fullPost = await req.models.Post.find({_id: post});
                fullPost = fullPost[0];
                if (fullPost.date.getFullYear() == req.query.year &&
                    fullPost.date.getMonth() == req.query.month &&
                    fullPost.date.getDate() == req.query.day) {
                        console.log('pushing post')
                        allPosts.push(fullPost); 
                    }
            };
            res.json(allPosts);
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
        if (req.body.id) {
            let user = await req.models.User.findOne({_id: req.body.id});
            const newPost = new req.models.Post({
                postedBy: user.username,
                family: user.family,
                title: req.body.title,
                date: Date.now(),
                content: req.body.content,
                emotion: req.body.emotion,
                type: req.body.type,
            });
            await newPost.save();
            user.posts.push(newPost._id);
            await user.save();
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
        if (thisSession.user) {
            let user = await req.models.User.find({username: thisSession.user.username});
            user = user[0];
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