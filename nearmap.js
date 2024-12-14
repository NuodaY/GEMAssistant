const { BigNumber } = require("bignumber.js-ext");
const {ipcRenderer} = require("electron")

document.getElementById("searchIcon").addEventListener("click", searchAddress);
document.getElementById("backtoMenu").addEventListener("click", backToMenu);

function searchAddress() {
    let address = document.getElementById("addressInput").value;
    let apiKey = "pk.eyJ1IjoibnVvZGF5IiwiYSI6ImNtMTNtMTI4czFmZmYycXEyd2F3OTZuNGUifQ.JacDmC0DWEvpu2I5Nxl9JQ"
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${apiKey}&limit=1`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.features[0])
            if (data.features) {
                var lat = data.features[0].center[1];
                var lon = data.features[0].center[0];
                var coordinate = ol.proj.fromLonLat([new BigNumber(lon), new BigNumber(lat)]);
                console.log(coordinate)

                // Pan to the location
                map.getView().setCenter(coordinate);
                map.getView().setZoom(18);

                // Add marker
                var marker = new ol.Overlay({
                    position: coordinate,
                    positioning: 'center-center',
                    element: document.createElement('div'),
                    stopEvent: false
                });
                marker.getElement().innerHTML = '<i class="fa-solid fa-map-pin fa-2xl" style="color: #f14141;"></i>';
                map.addOverlay(marker);
                alert("已成功找到"+data.features[0].place_name+", 坐标为"+coordinate)
            } else {
                alert('未能找到地址，请联系nuoda上传nearmap');
            }
        })
        .catch(error => console.error('Error:', error));
}

function backToMenu() {
    ipcRenderer.send("menu")
}