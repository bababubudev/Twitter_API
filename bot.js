import Twit from "twit";
import * as t_setter from "./config.js";

var T = new Twit(t_setter.keys);

// T.get("search/tweets", t_setter.search_params, t_setter.on_data);
// T.post("statuses/update", t_setter.tweet, t_setter.on_tweet);