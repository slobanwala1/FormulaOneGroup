var circuitData="circuits.json";
var circuitJson;

// Perform a GET request to the query URL
d3.json(circuitData, function(data) {

  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
  }

  var circuits = L.geoJSON(data, {
    onEachFeature: onEachFeature
  });
  
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 2.5,
    layers: [streetmap, circuits]
  });
  // loop through the JSON and create markers for all circuits
 
  for(let i=0;i < data.length;i++ ){
    let d = data[i];
    var marker = L.marker([d.lat, d.lng], {
      draggable: true,
      title: d.name
    }).addTo(myMap);

    // Binding a pop-up to our marker
    marker.bindPopup(d.name);
  }
});
