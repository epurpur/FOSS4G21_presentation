// Initialize Leaflet Map

const map = L.map('map').setView([37.052887, -81.103989], 4.4);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);


// Custom icon color for Charlottesville
const goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

// Adding Markers for locations on the map
const charlottesville = L.marker([38.033554, -78.507980], {icon: goldIcon}).addTo(map)
charlottesville.bindPopup(`<b class='cityPopup'>Charlottesville</b>`)

const newYork = L.marker([40.650002, -73.949997]).addTo(map);
newYork.bindPopup(`<b class='cityPopup'>New York</b>`);

const miami = L.marker([25.761681, -80.191788]).addTo(map);
miami.bindPopup(`<b class='cityPopup'>Miami</b>`);

const chicago = L.marker([41.876465, -87.621887]).addTo(map);
chicago.bindPopup(`<b class='cityPopup'>Chicago</b>`);

const washington = L.marker([38.889248, -77.050636]).addTo(map);
washington.bindPopup(`<b class='cityPopup'>Washington</b>`);