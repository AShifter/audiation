const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

var win;

function createWindow() {
    win = new BrowserWindow({width: 1080, height: 889, icon: 'audiation.ico', frame: false});

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.setMenu(null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
})