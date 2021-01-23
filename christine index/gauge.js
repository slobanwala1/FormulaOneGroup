//fastestLapSpeed

var chart = c3.generate({
    data: {
        columns: [
            ['fastestLapSpeed', 230]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    gauge: {
       labels: {                    //could be labels. the docs conflct
            format: function(value, ratio) {
                return value;
            },
            show: false // to turn off the min/max labels.
        },
    min: 200, 
    max: 225, 
    units: ' %',
    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#f0f5d5', '#f55916', '#f76628', '#f20525'],
        threshold: {
            unit: 'value', // percentage is default
            max: 225,
            values: [210, 215, 220, 225]
        }
    },
    size: {
        height: 180
    }
});

var ticksValues = [200, 205, 210, 215, 217, 219, 221, 223];

var ticks = d3.select('.c3-chart-arcs')
        .append('g')
      .selectAll("line")
        .data(ticksValues).enter()
      .append("line")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", -chart.internal.radius+8)
        .attr("y2", -chart.internal.radius)
        .attr("transform", function (d) {
            var min = chart.internal.config.gauge_min,
                max = chart.internal.config.gauge_max,
                ratio = d / (max - min),
                rotate = (d - 2) * 45;
            return "rotate(" + rotate + ")";
        });

setTimeout(function () {
    chart.load({
        columns: [['data', 201]]
    });
}, 500);

setTimeout(function () {
    chart.load({
        columns: [['data', 205]]
    });
}, 600);

setTimeout(function () {
    chart.load({
        columns: [['data', 210]]
    });
}, 700);

setTimeout(function () {
    chart.load({
        columns: [['data', 215]]
    });
}, 800);

setTimeout(function () {
    chart.load({
        columns: [['data', 220]]
    });
}, 900);

setTimeout(function () {
    chart.load({
        columns: [['data']]
    });
}, 1000);
