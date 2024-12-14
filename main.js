const { app, BrowserWindow, ipcMain, Menu, webContents } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        resizable: false,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

const template = [
    {
        label: '关于',
        submenu: [
            {
                label: '关于本程序',
                click: () => {
                    let win = new BrowserWindow({
                        width: 400,
                        height: 300,
                    })
                    win.loadFile('./about.html')
                    win.on('close', () => (sonWin = null)
                    )
                },
            },
            {
                label: '关于公司',
                click: () => {
                    let win = new BrowserWindow({
                        width: 1920,
                        height: 1080,
                    })
                    win.loadURL('http://www.metrosurveygroup.com.au/')
                    win.on('close', () => (sonWin = null)
                    )
                },
            },
        ],
    },
    {
        label: '调试',
        submenu: [
            {
                label: '开发者工具',
                click: () => {
                    const win = BrowserWindow.getFocusedWindow();
                    win.webContents.openDevTools()
                },
            },
        ]
    }
]

const myMenu = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(myMenu)

app.whenReady().then(() => {
    var date = new Date();
    if (date.getFullYear() == 2025 && date.getMonth() > 6) {
        app.exit()
    }
    else {
        createWindow()
    }

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('openNearmapPage', (evt, msg) => {
    const win = BrowserWindow.getFocusedWindow();
    if (win) {
        win.loadFile('nearmap.html');
        console.log(msg)
    }
});

ipcMain.on("menu", () => {
    const win = BrowserWindow.getFocusedWindow();
    if (win) {
        win.loadFile('index.html');
    }
})