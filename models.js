import mongoose from 'mongoose';

import { MONGODB_USERNAME, MONGODB_PASSWORD } from './credentials.js';

let models = {};
main().catch((error) => console.log(error));

async function main(){
    try{
        let url = "mongodb+srv://"+ MONGODB_USERNAME + ":"+ MONGODB_PASSWORD + "@mvpcluster.drilqih.mongodb.net/test"
        console.log("Connecting to MongoDB...");
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connected to MongoDB');
    } catch(err) {
        console.log("could not connect to MongoDB", err);
    }

    //_id is automatically created
    const familySchema = new mongoose.Schema({
        name: String, //can add family nickname
        members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
        posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}] //for public posts
    })

    const userSchema = new mongoose.Schema({
        username: String, //get from google auth
        password: String, //hash the password before saving to db
        family: {type: mongoose.Schema.Types.ObjectId, ref: 'Family'},
        post: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}], //for private posts
        DateCreated: Date,
    })

    // for family log
    const eventSchema = new mongoose.Schema({
        postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        title: String,
        date: Date,
        location: String,
        media: String, //url
        description: String,
    })

    const postSchema = new mongoose.Schema({
        postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        family: {type: mongoose.Schema.Types.ObjectId, ref: 'Family'},
        type: String, //emotion or gratitude
        title: String,
        date: Date,
        content: String,
        emoji: String,
    })

    models.Family = mongoose.model('Family', familySchema);
    console.log("Family model created");
    models.User = mongoose.model('User', userSchema);
    console.log("User model created");
    models.Event = mongoose.model('Event', eventSchema);
    console.log("Event model created");
    models.Post = mongoose.model('Post', postSchema);
    console.log("Post model created");
}
export default models;