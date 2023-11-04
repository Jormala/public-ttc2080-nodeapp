const express = require('express');

const app = new express();
const port = 3000;


app.get("/test/", (request, response) => {
    console.log("Received a GET request");

    response.json({
        message: "Hello world!"
    });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
