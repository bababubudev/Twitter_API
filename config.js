import * as Sutukka from "dotenv";
Sutukka.config();

const keys = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

var r = Math.floor(Math.random() * 100);
const texts = {
    random_text: 'Number ' + r + ' chai random ho hai.',
    follow_text: 'Thank you for following, @'
}

const user_name = "@prwshshrm";

export { keys, texts, user_name };