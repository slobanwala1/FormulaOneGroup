var circuitData="static/circuits.json";
var circuitJson;

circuit_data.forEach(element => {
    console.log(element.circuit_name);
    console.log(element.lat);
    console.log(element.lng);
    console.log(element.url);
});
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
  //
  // loop through the JSON and create markers for all circuits
   for(let i=0;i < data.length;i++ ){
    let d = data[i];
    var marker = L.marker([d.lat, d.lng], {
      draggable: true,
      title: d.name,
      win_url: d.url
    }).addTo(myMap).on('click', onClick);

    function onClick(e) {
      // To get all contents of e console log it instead of alert
      // console.log(e);
      // e.sourceTarget.options.title has the circuit track title
      // console.log(e.sourceTarget.options.title);
      //alert(e.latlng);
      // window.open(this.options.win_url,"_self");
      window.open('http://127.0.0.1:5000/dashboard/'+e.sourceTarget.options.title,"_self");
    }

    // Binding a pop-up to our marker
    // marker.bindPopup("<a href=https://www.w3schools.com>Visit W3Schools</a>");
  }
});