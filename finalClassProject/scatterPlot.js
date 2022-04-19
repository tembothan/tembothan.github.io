// set dimensions and margins of graph
var margin = {top: 10, right: 50, bottom: 30, left: 50},
    width = (screen.width-400) - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

    console.log(screen.width)

// append svg object to the body of the page
var svg = d3.select("#scatterPlot")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read data
d3.csv("ThePrisonIndustryData2020Cleaned.csv", function(data) {

  // X axis
  var x = d3.scaleLinear()
    .domain([0, 700000])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

    // Y axis
  var y = d3.scaleLinear()
  .domain([0, 300000])
  .range([ height, 0]);
  
  svg.append("g")
  .call(d3.axisLeft(y));

  svg.append("circle")
      .attr("r", 3)
      .attr("cx", data.Employees.replace(/\s/g, ''))
      .attr("cy", data.AnnualRevenuesMn.replace(/\s/g, ''))
      .style("fill", "none")
      .style("stroke", function() {
        switch(data.Continent) {
        case 'North America':
          return "#F9ACFA";
        case 'Africa':
          return "#82FFD2";
        case 'Asia':
          return "#E000D1";
        case 'Europe':
          return "#FAF8A9";       
        case 'South America':
          return "#FF5026";
        case 'Australia':
          return '#5F80FA';   
        }
      })

    /*svg.selectAll("circle")
    .transition()
    .delay(function(d,i){return(i*3)})
    .duration(2000)
    .attr("cx", x(data.Employees.replace(/\s/g, '')) )
    .attr("cy", y(data.AnnualRevenuesMn.replace(/\s/g, '')) )*/
    
      console.log(data.Continent);
})
console.log("scatter plot done");



  /* append svg object to the body of the page
var svg = d3.select("#chart2")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read data
d3.csv("ThePrisonIndustryData2020.csv", function(data) {

// X axis
var bubblePlotX = d3.scaleLinear()
  .domain([0, 30])
  .range([ 0, width ]);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

  // Y axis
var BubblePlotY = d3.scaleLinear()
.domain([0, 400000])
.range([ height, 0]);

svg.append("g")
.call(d3.axisLeft(BubblePlotY));

//console.log("add dot: " + data.Rank + ", " + data.AnnualRevenuesMn);

if (data.Rank <= 25){
svg.append("circle")
    .attr("r", data.AnnualRevenuesMn/3)
    .attr("cx", data.rank)
    .attr("cy", d3.randomUniform(10, 25))
    .style("outline", "#4287f5");
};

console.log("bubble chart done");
})*/