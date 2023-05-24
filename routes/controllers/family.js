import express from 'express';
var router = express.Router();

// adds a user to a family and transfers all posts to the family
router.put('/update-family', async (req, res) => {
    try {
        if (req.body.id) {
            console.log(req.body);
            console.log(req.query.id);
            let user = await req.models.User.findOne({_id: req.body.id});
            let userToAdd = await req.models.User.findOne({username: req.body.userToAdd});
            let family = await req.models.Family.findOne({_id: user.family})
            let userToAddFamily = await req.models.Family.findOne({_id: userToAdd.family})
            if (!userToAdd) {
                res.status(400).json({message: "User not found"});
            }
            family.members.push(userToAdd._id);
            family.posts = family.posts.concat(userToAddFamily.posts);
            userToAdd.family = family._id;

            await family.save();
            await userToAdd.save();
            res.status(200).json({message: "User added to family"});
        } else {
            res.status(401).json({message: "You must be logged in to add a user to your family"});
        }; 
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err});
    }
});
export default router;