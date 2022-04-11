/* var prisonData = d3.csv("ThePrisonIndustry2020.csv");

prisonData.then(function(csvFile){
    console.log(csvFile);
})
.catch(function(error){
    console.log(error);
});*/

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 1500 - margin.left - margin.right,
    height = 1600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#chart1")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("ThePrisonIndustryData2020.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 1550])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

    // Add Y axis
  var y = d3.scaleLinear()
  .domain([0, 400000])
  .range([ height, 0]);
  
  svg.append("g")
  .call(d3.axisLeft(y));

  console.log("add dot: " + data.Rank + ", " + data.AnnualRevenuesMn);


  svg.selectAll("dot")
      .data(data)
    .enter().append("circle")
      .attr("r", 5)
      .attr("cx", function(d) { return x(d.Rank); })
      .attr("cy", function(d) { return y(d.AnnualRevenuesMn); })
      .style("fill", "#69b3a2");;

  console.log("done");
})