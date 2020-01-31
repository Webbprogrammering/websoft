'use strict';
const port = 1337;

const express = require('express');
const app = express();

app.use(express.static("public"));

app.use((request, response, next) => {
    console.info(`Got request on ${request.path} (${request.method}).`);
    next();
});

app.get("/", (request, response) => {
    response.send(`Hello World`);
});

app.get("/about", (request, response) => {
    response.send(`About something`);
});

app.listen(port, () => {
        console.info(`Listening at on port: ${port}`);
        console.info("Available routes are:");
        app._router.stack.forEach((r) => {
            if (r.route && r.route.path) {
                console.info(r.route.path);
            }
        });
    }
);