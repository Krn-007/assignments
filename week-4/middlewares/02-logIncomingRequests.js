//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
    // write the logic for request log here
    console.log(`${req.method} ${req.url}`);

    next();
}
app.use(express.json())

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

app.listen(3005)
module.exports = app;
