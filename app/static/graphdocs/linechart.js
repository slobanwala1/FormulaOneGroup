//here i'll have to do a d3.json?
//filter?
function displayLineChart(driver1Name, driver2Name, driver1arr, driver2arr) {
  console.log('in line chart');
  console.log(driver1Name);
  console.log(driver2Name);
  console.log(driver1arr);
  console.log(driver2arr);
  var linechart = c3.generate({
  bindto: '#linechart',
  data: {
      columns: [
      ],
      colors: {
          Driver1: '#EB1809',
          Driver2: '#141313'
      }
      //WE WILL HAVE TO ADD A FOR LOOP TO GET THE DRIVERS
  },
  names: {
    data1: 'Driver 1',
    data2: 'Driver 2'
  },
  legend: {
      show: true,
      position: 'inset',
      inset: {
        anchor: 'bottom-right'
      }
  },
  interaction: {
    enabled: true
  },
  axis: {
    x: {
      show: true,
      default: [0, 1],
      label: {
        text: 'Lap Number',
        position: 'outer-center'
      }
    },
    y: {
      show: true,
      default: [0, 1],
      label: {
        text: 'Lap Time, in milliseconds',
        position: 'outer-center'
      }
    }
  },
  size: {
    height: 420,
    width: 980
  }
}),
timeout = 1000;
function addColumn(data, delay){
var dataTmp = [data[0], 0];
setTimeout(function(){
linechart.d3.duration(100);
linechart.load({
  columns: [
    dataTmp
  ]
});
}, timeout);
timeout += 200;
data.forEach(function(value, index){
setTimeout(function(){
  dataTmp[index] = value;
  if(index < 10) dataTmp.push(0);
  linechart.load({
    columns: [
      dataTmp
    ],
    length:0
  });
}, (timeout + (delay/data.length*index)));
});
timeout += delay;
}
function addLine(value){
setTimeout(function(){
linechart.ygrids.add({value: value});
}, timeout);
timeout += 100;
}
setTimeout(function(){
linechart.axis({
min: {
  x: 1,
  y: -7 //change this.
},
max: {
  x: 80,
  y: 10 // change this.
}
});
}, timeout);
timeout += 500;
//here i'll have to add the variable for the drivers
addColumn(['DRIVERNAME', 6, 5.95, 6.69, 7.47, 3.53, 0.92, 7.21, 4.02, 3.97, 4.18, 4.2, 6, 5.95, 6.69, 7.47, 3.53, 0.92, 7.21, 4.02, 3.97, 4.18, 4.27, 6, 5.95, 6.69, 7.47, 3.53, 0.92, 7.21, 4.02, 3.97, 4.18, 4.2, 6, 5.95, 6.69, 7.47, 3.53, 0.92, 7.21, 4.02, 3.97, 4.18, 4.27]);
addColumn(['DRIVERNAME2', 7.45, 7.31, 8.69, 8.74, 5.7, -6.15, 4.4, 4.67, 3.8, 2.02, 3.04], 2000);
//addColumn(['Country3', 3.82, 3.06, -2.56, 4.43, 2.2, 1.23, 2.53, 2.4, 3.53, 2.62, 2.58], 2000);
//addColumn(['Country4', 7.58, 8.57, 8.24, 7.54, 4.69, 3.68, 7.62, 6.55, 4.64, 5.02, 4.63], 2000);
timeout += 1500;
var lineValue = -6
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
lineValue += 2;
addLine(lineValue);
timeout += 1000;
setTimeout(function(){
linechart.d3.duration(3000);
linechart.legend.show();
}, timeout);

  // var linechart = c3.generate({
  //   bindto: '#linechart',
  //       data: {
  //           columns: [
  //           ],
  //           hide: true,
  //           colors: {
  //               Driver1: '#eb1809',
  //               Driver2: '#141313'
  //           }
  //           //WE WILL HAVE TO ADD A FOR LOOP TO GET THE DRIVERS
  //       },
  //       names: {
  //         data1: 'Driver 1',
  //         data2: 'Driver 2'
  //       },
  //       legend: {
  //           show: true,
  //           position: 'inset',
  //           inset: {
  //             anchor: 'bottom-right'
  //           }
  //       },
  //       interaction: {
  //         enabled: true
  //       },
  //       axis: {
  //       	x: {
  //           show: true,
  // 			    default: [0, 1],
  //           label: {
  //             text: 'Lap Number',
  //             position: 'outer-center'
  //           }
  //         },
  //         y: {
  //           show: true,
  // 			    default: [0, 1],
  //           label: {
  //             text: 'Lap Time, in milliseconds',
  //             position: 'outer-center'
  //           }
  //       	}
  //       },
  //       size: {
  //         height: 320,
  //         width: 480
  //       }
  //   }),
  //   timeout = 1000;
  //
  // function addColumn(data, delay){
  // 	var dataTmp = [data[0], 0];
  //   setTimeout(function(){
  // 		linechart.internal.d3.transition().duration(100);
  //     linechart.load({
  //       columns: [
  //         dataTmp
  //       ]
  //     });
  //   }, timeout);
  //   timeout += 200;
  //   data.forEach(function(value, index){
  //     setTimeout(function(){
  // 	    dataTmp[index] = value;
  //       if(index < 10) dataTmp.push(0);
  //       linechart.load({
  //         columns: [
  // 	        dataTmp
  //         ],
  //         length:0
  //       });
  //     }, (timeout + (delay/data.length*index)));
  //   });
  //   timeout += delay;
  // }
  //
  // function addLine(value){
  // setTimeout(function(){
  //     linechart.ygrids.add({value: value});
  // }, timeout);
  // timeout += 100;
  // }
  //
  // setTimeout(function(){
  //   linechart.axis.range({
  //     min: {
  //       x: 1,
  //       y: -7 //change this.
  //     },
  //     max: {
  //       x: 80,
  //       y: 10 // change this.
  //     }
  //   });
  // }, timeout);
  // timeout += 500;
  //
  // //here i'll have to add the variable for the drivers
  // addColumn(['DRIVERNAME', 6, 5.95, 6.69, 7.47, 3.53, 0.92, 7.21, 4.02, 3.97, 4.18, 4.2, 6, 5.95, 6.69, 7.47, 3.53, 0.92, 7.21, 4.02, 3.97, 4.18, 4.27]);
  // addColumn(['DRIVERNAME2', 7.45, 7.31, 8.69, 8.74, 5.7, -6.15, 4.4, 4.67, 3.8, 2.02, 3.04]);
  // //addColumn(['Country3', 3.82, 3.06, -2.56, 4.43, 2.2, 1.23, 2.53, 2.4, 3.53, 2.62, 2.58], 2000);
  // //addColumn(['Country4', 7.58, 8.57, 8.24, 7.54, 4.69, 3.68, 7.62, 6.55, 4.64, 5.02, 4.63], 2000);
  //
  // timeout += 500;
  //
  // var lineValue = -6
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // lineValue += 2;
  // addLine(lineValue);
  // timeout += 1000;
  //
  // setTimeout(function(){
  //   linechart.internal.d3.transition().duration(3000);
  //   linechart.legend.show();
  // }, timeout);
}


//end of code
