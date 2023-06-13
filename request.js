const request = require("request");
const url = 'https://nodejs.org/en/';

request.get(url, (error, response, html) => {
    if (error) {
        console.error(error.message);
        return;
    }
    console.log(html);
})