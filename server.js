var express = require("express");
var app = express();

app.use(express.static("public"))
app.use(express.static("."))

app.get('/', function (req, res) {
    res.sendfile("public/index.html")
})

app.listen(3000, function () {
    console.log('Listen port 3000')
})