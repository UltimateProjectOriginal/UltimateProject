var fs = require('fs');

fs.readFile('./JS/data.js', 'utf8', function(err, data) {
    eval(data);
    fs.writeFile(logsLocation, logs, function(err) {
    });
});