const {ipcRenderer} = require('electron');

document.getElementById("nearmapButton").addEventListener("click", getNearmap);

function getNearmap(){
    let api_key = "YjhmMGU4ZGYtMmQ1MC00YmZmLWIwZDYtYmRhNzFjNzQyZDNj"
    let api_url = `https://api.nearmap.com/tiles/v3/Vert/21/1855981/1265938.jpg?apikey=${api_key}`
    ipcRenderer.send("openNearmapPage", api_url)
}

