var fs = require('fs');
var { app, BrowserWindow } = require("electron");
var win = null;

fs.readFile('./JS/functions.js', 'utf8', function(err, functions) {

    // READING THE JS
    eval(functions);

    fs.readFile('./options.json', 'utf8', function(err, data) {
        var mC = JSON.parse(data);
        var createWindow = () => {
            win = new BrowserWindow({
        
                // #######
                // OPTIONS
                // #######
        
                // Width of the app
                width: mC.App.Width,
        
                // Height of the app
                height: mC.App.Height,
        
                // If the app is resizable
                resizable: mC.App.Resizable,
        
                // If the menu bar is hidden
                autoHideMenuBar: mC.App.HideMenuBar,
        
                // The app icon
                icon: mC.Links.Logo,
        
                webPreferences: {
                    nodeIntegration: true
                },
            });
            app.commandLine.appendSwitch('enable-logging');
            win.loadFile(mC.Links.HTML);
        };
        app.whenReady().then(createWindow);
        var connect = require('./servWeb.js');
    });
});