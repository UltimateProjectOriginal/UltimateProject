var fs = require('fs');
function log(string) {
    console.log(string);
}
function cl(string) {
    console.log(string);
}
function flog(string) {
    fs.writeFile('./logs.txt', string, function(err) {
    });
}