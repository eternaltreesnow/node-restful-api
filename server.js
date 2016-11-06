var express = require('express');
var app = express();
var fs = require('fs');

app.get('/user', (req, res) => {
    fs.readFile(__dirname + '/data/' + 'users.json', 'utf8', (err, data) => {
        if (err) {
            console.err(err);
        }
        console.log(data);
        res.end(data);
    });
});

app.post('/user', (req, res) => {
    res.send('hello rest');
});

app.delete('/user', (req, res) => {
    res.send('hello rest delete');
});

var server = app.listen(8081, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening http://%s:%s', host, port);
});
