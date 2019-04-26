/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [39.95, -75.16],
  zoom: 14
});
basemapURL = "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";

var Stamen_TonerLite = L.tileLayer(basemapURL, {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


var url = 'https://gist.githubusercontent.com/rossbernet/747bb602f14bc28c0c2e61b0c7153fdc/raw/e2565897a275aff8354ff6427e6a94a3408b0eb5/parks.geojson';
var jsondata;
$.ajax(url).done(function(res) {
  jsondata = JSON.parse(res);
  layer = L.geoJSON(jsondata);
  layer.addTo(map);
});


// Getting data from OpenStreetMap overpass api


// Go to: https://overpass-turbo.eu/

// Go to the Wizard.
// Type something like "Park in Pennsylvania"
// Run it. It may be too big. Continue on.
// Export as geoJson
// Load it into geoJson.io
// Copy and paste the json text into a new gist
// Click 'raw' and copy the URL into `var url` above. Visualize.