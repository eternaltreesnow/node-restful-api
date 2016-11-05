var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', (req, res) => {
    fs.readFile(__dirname + '/data/' + 'users.json', 'utf8', (err, data) => {
        if (err) {
            console.err(err);
        }
        console.log(data);
        res.end(data);
    });
});

var server = app.listen(8081, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening http://%s:%s', host, port);
});
