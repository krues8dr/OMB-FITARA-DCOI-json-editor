const express = require("express");

const app = express();

app.use(express.static('bin'));

app.listen(3000, function () {
    // console.log('Dev version of the app listening on port 3000!');
});