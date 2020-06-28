const mongoose = require(`mongoose`);
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const collection = `tweets`;
const tweetSchema = new Schema (
    {
        content: {
            type: String,
            required: true
        },
        user:{
            type: Schema.ObjectId, ref: 'users'
        }
    },
    {timestamps: true}
);

const Tweet = mongoose.model(collection, tweetSchema);

module.exports = Tweet;