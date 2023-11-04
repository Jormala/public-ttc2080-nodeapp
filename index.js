const express = require('express');

const app = new express();
const port = 3000;


app.get("/test/", (request, response) => {
    response.json({
        message: "Hello world!"
    });
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
