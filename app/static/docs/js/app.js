// shanil testing
var obj;
var curTeam;

function fetchData() {
  var circuitName = circuit_name;
  var infoType = 'CircuitInfo'; // either 'CircuitInfo', 'LapInfo' or 'TopTen'
  var params = circuitName.concat('_', infoType);
  fetch(`/data/${params}`, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj));
}

// // Display the default plot
function displayPieChart(teamName, driver1_name, driver2_name, driver1_points, driver2_points) {
  console.log(teamName);
  console.log(driver1_name);
  console.log(driver2_name);
  console.log(driver1_points);
  console.log(driver2_points);
  var totalPoints = parseInt(driver1_points+driver2_points);
  var data = [{
    name: teamName+' Point Breakdown',
    values: [parseInt(driver1_points), parseInt(driver2_points)],
    labels: [driver1_name, driver2_name],
    type: "pie"
  }];

  var layout = {
    height: 300,
    width: 400
  };

  Plotly.newPlot("pie_chart", data, layout);
}

function optionChanged(team_name) {
  console.log("selected:"+team_name);
  var keys = Object.keys(obj);
  for (const key of keys) {
    // console.log(obj[key]);
    // console.log(obj[key].teamName);
    if (obj[key].teamName == team_name) {
      console.log("HIT TEAM"+obj[key].teamName);
      //console.log(typeof obj[key]);
      // curTeam = obj[key].teamName;
      displayGauge(obj[key].driver1_name, obj[key].driver2_name, obj[key].driver1_topSpeed, obj[key].driver2_topSpeed, obj[key].circuit_topSpeed);
      displayPieChart(obj[key].teamName, obj[key].driver1_name, obj[key].driver2_name, obj[key].driver1_points, obj[key].driver2_points);
      displayLineChart();
    }
  }
  // console.log('cur team:');
  // console.log(curTeam);
}

function init() {
  fetchData();
}

init();
// displayGauge('driver1_name', 'driver2_name', '220', '230', '250');



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
