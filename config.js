import * as Sutukka from "dotenv";
Sutukka.config();

const keys = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

const search_params = {
    q: 'Naya hannu paro node js bata haha!',
    count: 2
};

const tweet = {
    status: 'Naya hannu paro node js bata haha!'
};

export { keys, search_params, tweet };

export function on_data(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].user.name);
    }
};

export function on_tweet(err, data, response) {
    console.log(data);
};