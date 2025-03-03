# WebGIS
A WebGIS project using geoserver and leaflet. 
Leaflet WebGIS with GeoServer WMS & WMTS

This project is a WebGIS application built using Leaflet.js, integrating GeoServer as a map service provider. It supports multiple base layers, WMS overlays, and additional GIS functionalities like mini-map, scale bar, and search box.

Features

🌍 Base Layers: OpenStreetMap, Google Maps, and GeoServer WMS/WMTS

🗺️ Overlay Layers: GeoServer WMS layers (Tasmania states, roads, water bodies, etc.)

🧭 Leaflet Controls: Scale bar, mini-map, and geocoder search

🔄 Layer Switching: Interactive layer control to toggle base and overlay layers

Technologies Used

Leaflet.js (Map rendering & interaction)

GeoServer (WMS & WMTS layers)

HTML, CSS, JavaScript (Frontend structure & styling)

Installation & Setup

1️⃣ Clone the Repository

 git clone https://github.com/your-username/your-repo.git
 cd your-repo

2️⃣ Install Dependencies

No external dependencies are needed. Just open the index.html file in a browser.

3️⃣ Configure GeoServer

Ensure GeoServer is running at http://localhost:8081/geoserver

Publish your shapefiles as WMS/WMTS layers

Update the layer names in the script.js

4️⃣ Run the Project

Simply open index.html in a browser.

Code Overview

1️⃣ Base Layers (GeoServer & OSM)

var geoserverBase = L.tileLayer.wms("http://8081/geoserver/wms", {
    layers: "your_workspace:your_layer",
    format: "image/png",
    transparent: false
}).addTo(map);

2️⃣ Overlay Layers (WMS)

var topp1 = L.tileLayer.wms("http://8081/geoserver/wms", {
    layers: "topp:states",
    format: "image/png",
    transparent: true
}).addTo(map);

3️⃣ Layer Control

L.control.layers({"GeoServer WMS": geoserverBase, "OpenStreetMap": osmLayer}, {"States": topp1}).addTo(map);

Troubleshooting

WMS Layers Not Appearing? Check the BBOX settings in GeoServer.

Layer Switching Not Working? Ensure layers are correctly added to L.control.layers.

Performance Issues? Consider using WMTS instead of WMS.

Contributing

Feel free to fork the repository, submit pull requests, or open issues!

Author

👨‍💻 Developed by Your Name

