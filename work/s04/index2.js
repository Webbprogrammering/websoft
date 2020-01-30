'use strict';
require(`dotenv`).config();
const port = process.env.PORT;
const express = require('express');
const app = express();
const routeIndex = require(`./route/route.js`);
const middleware = require(`./middleware/middleware.js`);

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

app.use(middleware.logIncomingToConsole);
app.use("/", routeIndex);
app.use("/about", routeIndex);
app.listen(port, logStartUpDetailsToConsole);