var fs = require('fs');
fs.readFile('./JS/functions.js', 'utf8', function(err, functions) {

    // READING THE JS
    eval(functions);

    fs.readFile('./options.json', 'utf8', function(err, data) {
        var json = JSON.parse(data);
        var port = 8080;
        if (json.Server.WebServer === true) {
            var http = require('http');
            http.createServer(function (req, res) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('<p>test</p>');
                res.end();
            }).listen(port);
        }
    });
});