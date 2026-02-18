const request = require("request-promise");

const options = {
    method: "GET",
    url: "https://incanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "user-agent": "writing JavaScript action GitHub skills exercise.",
    },
    json: true,
};

async function getJoke() {
    const res = await request(options);
    return res.joke
}

module.exports = getJoke;