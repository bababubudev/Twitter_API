import Twit from "twit";
import { keys, texts, user_name } from "./config.js";

var T = new Twit(keys);

var stream = T.stream('statuses/filter', { track: user_name });
stream.on('follow', on_followed);

function get_tweet() {
    var search_params = {
        q: 'Naya hannu paro node js bata haha!',
        count: 2
    };

    T.get("search/tweets", search_params, on_data);

    function on_data(err, data, response) {
        var tweets = data.statuses;
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].user.name);
        }
    };
}

function post_tweet(text) {
    var tweet = {
        status: text
    };

    T.post("statuses/update", tweet, on_tweet);

    function on_tweet(err, data, response) {
        if (!err) console.log("Tweet succesful!\nTweet: " + tweet.status);
        else console.log(data);
    };
}

function on_followed(eventMsg) {
    var screen_name = eventMsg.user.screen_name;
    post_tweet(texts.follow_text + screen_name + ".");
}