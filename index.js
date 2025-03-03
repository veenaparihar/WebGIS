// //initialize the map
// var map = L.map('map', {
//     center: [-42.8821, 147.3272], // Center on Tasmania (Hobart, capital city)
//     zoom: 7,
//     worldCopyJump: false, // Prevents automatic panning
//     maxBounds: [ // Restricts panning to Tasmania's general area
//         [-45, 143], // Southwest corner (near Macquarie Harbour)
//         [-39, 149]  // Northeast corner (near Flinders Island)
//     ],
//     maxBoundsViscosity: 1.0 // Strongly enforce maxBounds
// });

// //var map = L.map('map').setView([51.505, -0.09], 13);
// var map = L.map('map').setView([-42.8821, 147.3272], 7);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     noWrap: true // Prevents world map repetition
// }).addTo(map);

// let popup = L.popup();

// function onMapClick(e){
//       popup
//       .setLatLng(e.latlng)
//       .setContent("You have clicked the map at" + e.latlng.toString())
//       .openOn(map);
// }

// map.on("click", onMapClick);

// //Add marker
// L.marker([-42.8821, 147.3272]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();

// // //Test Code
// // // Tile layers
// // var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //     attribution: '&copy; OpenStreetMap contributors',
    
// // }).addTo(map);

// // var googleHybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
// //     maxZoom: 20,
// //     subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
// // });

// // // Marker
// // var marker = L.marker([51.505, -0.09]).addTo(map)
// //     .bindPopup("Hello! This is a marker.");

// // // Polygon
// // var polygon = L.polygon([
// //     [51.508, -0.11],
// //     [51.503, -0.12],
// //     [51.51, -0.1]
// // ]).addTo(map);

// // // Layer control
// // L.control.layers({
// //     "OpenStreetMap": osmLayer,
// //     "Google Hybrid": googleHybrid
// // }).addTo(map);

// //Definition of the layers
// let topp1 = L.tileLayer.wms("http://8081/geoserver/wms", {
//     layers: "topp:states",
//     transparent: true,
//     format: "image/png"
// })

// let topp2 = L.tileLayer.wms("http://8081/geoserver/wms", {
//     layers: "topp:tasmania_cities",
//     transparent: true,
//     format: "image/png"
// })

// let topp3 = L.tileLayer.wms("http://8081/geoserver/wms", {
//     layers: "topp:tasmania_roads",
//     transparent: true,
//     format: "image/png"
// })

// let topp4 = L.tileLayer.wms("http://8081/geoserver/wms", {
//     layers: "topp:tasmania_state_boundaries",
//     transparent: true,
//     format: "image/png"
// })

// let topp5 = L.tileLayer.wms("http://8081/geoserver/wms", {
//     layers: "topp:tasmania_water_bodies",
//     transparent: true,
//     format: "image/png"
// })

// let sf6 = L.tileLayer.wms("http://8081/geoserver/wms", {
//     layers: "sf:sfdem",
//     transparent: true,
//     format: "image/png"
// })

// //Overlays Maps

// let overLays = {
//     "States" : topp1,
//     "tasmania_cities" :topp2,
//     "tasmania_roads" :topp3,
//     "tasmania_state_boundaries": topp4,
//     "tasmania_water_bodies": topp5,
//     "sfdem": sf6
// }
// // adding the base maps
// //adding google hybrid as base_map
// let googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });

// //adding google streets as base_map

// let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });

// //adding google satellite as base_map

// let googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });

// //adding google terrain as base_map

// let googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
//     maxZoom: 20,
//     subdomains:['mt0','mt1','mt2','mt3']
// });

// //adding carto_db as base_map

// let cartoDB = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png', {
//    attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
//    subdomains: 'abcd',
//    maxZoom: 20,
//    minZoom: 0
// });

// // intitalization of basemaps

// // Initializing baseMaps
// let baseMaps = {
//     "OpenStreetMap" : map,
//       "Google Hybrid":googleHybrid,
//       "Google Streets": googleStreets,
//       "Google Satellite":googleSat,
//       "Google Terrain":googleTerrain,
//       "CartoDB": cartoDB,
// }

// let layerControl = L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map)
// //let layerControl = L.control.layers(overlayMaps, {collapsed: false}).addTo(map) 
// L.Control.geocoder().addTo(map);


var map = L.map('map').setView([-42.8821, 147.3272], 7);
let popup = L.popup();

function onMapClick(e){
      popup
      .setLatLng(e.latlng)
      .setContent("You have clicked the map at" + e.latlng.toString())
      .openOn(map);
}

map.on("click", onMapClick);

// Add a marker at a specific location (e.g., Hobart, Tasmania)
let marker = L.marker([-42.8821, 147.3272]).addTo(map);
marker.bindPopup("<b>Hobart, Tasmania</b><br>Capital of Tasmania.").openPopup();

// Define a custom icon
// let customIcon = L.icon({
//     iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png', // Use your own icon URL
//     iconSize: [38, 95], // Size of the icon
//     iconAnchor: [22, 94], // Point of the icon that corresponds to the marker location
//     popupAnchor: [-3, -76] // Where the popup should open relative to the icon
// });

// // Add a marker with the custom icon
// let customMarker = L.marker([-42.8821, 147.3272], {icon: customIcon}).addTo(map);
// customMarker.bindPopup("<b>Custom Marker</b><br>Hobart with a custom icon.");

// Base map
var baseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
});
baseMap.addTo(map);

//adding google hybrid as base_map
let googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    });

//adding google streets as base_map

let googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


//adding google satellite as base_map

let googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

//adding google terrain as base_map

let googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

//adding carto_db as base_map

let cartoDB = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png', {
   attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
   subdomains: 'abcd',
   maxZoom: 20,
   minZoom: 0
});


// WMS Overlays
let topp1 = L.tileLayer.wms("http://localhost:8081/geoserver/wms", { 
    layers: "topp:states", 
    transparent: true, 
    format: "image/png",
    zIndex: 10, 
    //bbox: "-124.73142200000001, -66.969849, 24.955967, 49.371735", 
    //crs: 'EPSG:4326'
    });
let topp2 = L.tileLayer.wms("http://localhost:8081/geoserver/wms", { layers: "topp:tasmania_cities", transparent: true, format: "image/png", zIndex: 10 });
let topp3 = L.tileLayer.wms("http://localhost:8081/geoserver/wms", { layers: "topp:tasmania_roads", transparent: true, format: "image/png", zIndex: 10 });
let topp4 = L.tileLayer.wms("http://localhost:8081/geoserver/wms", { layers: "topp:tasmania_state_boundaries", transparent: true, format: "image/png", zIndex: 10 });
let topp5 = L.tileLayer.wms("http://localhost:8081/geoserver/wms", { layers: "topp:tasmania_water_bodies", transparent: true, format: "image/png", zIndex: 10 });
let topp6 = L.tileLayer.wms("http://localhost:8081/geoserver/wms", { layers: "topp:DominantSoilOrdersTAS", transparent: true, format: "image/png", zIndex: 10});
let topp7 = L.tileLayer.wms("http://localhost:8081/geoserver/wms", { layers: "topp:cft_scenario_a2_statewide", transparent: true, format: "image/png", zIndex: 10 });
let sf6 = L.tileLayer.wms("http://localhost:8081/geoserver/wms", { layers: "sf:sfdem", transparent: true, format: "image/png" });

// Layer control
var baseMaps = { "OpenStreetMap": baseMap,
      "Google Hybrid":googleHybrid,
      "Google Streets": googleStreets,
      "Google Satellite":googleSat,
      "Google Terrain":googleTerrain,
      "CartoDB": cartoDB, 
    };

var overlayMaps = {
    "States": topp1,
    "Tasmania Cities": topp2,
    "Tasmania Roads": topp3,
    "Tasmania State Boundaries": topp4,
    "Tasmania Water Bodies": topp5,
    "SFDem": sf6,
    "DominantSoilOrdersTAS": topp6,
    "cft_scenario_a2_statewide": topp7
};

// Add layer control to map
L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);
// Add a geocoder (search box)
L.Control.geocoder().addTo(map);
L.control.scale().addTo(map);
// Add a MiniMap
var miniMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
var miniMap = new L.Control.MiniMap(miniMapLayer, { toggleDisplay: true }).addTo(map);


//Data Source - https://listdata.thelist.tas.gov.au/opendata/?utm_source=chatgpt.com