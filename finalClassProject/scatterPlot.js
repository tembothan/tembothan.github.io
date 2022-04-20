// set dimensions and margins of graph
var margin = {top: 10, right: 50, bottom: 30, left: 50},
    width = (screen.width-400) - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

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

})
console.log("scatter plot done");
