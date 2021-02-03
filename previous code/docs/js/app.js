// // Create an array of each country's numbers
// var mercedes = Object.values(data.mercedes);
// var ferrari = Object.values(data.ferrari);
// var redBull = Object.values(data.redBull);
// var mclaren = Object.values(data.mclaren);
// var renault = Object.values(data.renault);
// var toroRosso = Object.values(data.toroRosso);
// var racingPoint = Object.values(data.racingPoint);
// var alfaRomeo = Object.values(data.alfaRomeo);
// var haas = Object.values(data.haas);
// var williams = Object.values(data.williams);

// // Create an array of music provider labels
// // var labels = Object.keys(data.us);

// // Display the default plot
// // function init() {
// //   var data = [{
// //     values: mercedes,
// //     labels: labels,
// //     type: "pie"
// //   }];

// //   var layout = {
// //     height: 600,
// //     width: 800
// //   };

// //   Plotly.newPlot("pie", data, layout);
// // }

// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes
// function getData() {
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");
//   // Initialize an empty array for the country's data
//   var data = [];

//   if (dataset == 'mercedes') {
//       data = mercedes;
//   }
//   else if (dataset == 'ferrari') {
//       data = ferrari;
//   }
//   else if (dataset == 'redBull') {
//       data = redBull;
//   }
//   else if (dataset == 'mclaren') {
//       data = mclaren;
//   }
//   else if (dataset == 'renault') {
//       data = renault;
//   }
//   else if (dataset == 'toroRosso') {
//       data = toroRosso;
//   }
//   else if (dataset == 'racingPoint') {
//       data = racingPoint;
//   }
//   else if (dataset == 'alfaRomeo') {
//       data = alfaRomeo;
//   }
//   else if (dataset == 'haas') {
//       data = haas;
//   }
//   else if (dataset == 'williams') {
//       data = williams;
//   }
//   // Call function to update the chart
//   updatePlotly(data);
// }

// // Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("pie", "values", [newdata]);
// }

// init();

 