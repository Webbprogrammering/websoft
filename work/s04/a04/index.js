'use strict';
require(`dotenv`).config();
const port = process.env.PORT;
const express = require('express');
const app = express();
const route = require(`./route/route`);
const middleware = require(`./middleware/middleware`);
const path = require(`path`);

function logStartUpDetailsToConsole() {
    let routes = [];
    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            routes.push(middleware.route);
        } else if (middleware.name === "router") {
            middleware.handle.stack.forEach((handler) => {
                let route;
                route = handler.route;
                route && routes.push(route);
            });
        }
    });

    console.info(`Server is listening on port ${port}.`);
    console.info(`Available routes are:`);
    console.info(routes)
}

app.use(express.static(path.join(__dirname, `public`)));
app.set(`view engine`, `ejs`);
app.use(middleware.logIncomingToConsole);
app.use(`/`, route);
app.use(`/lotto`, route);
app.listen(port, logStartUpDetailsToConsole);