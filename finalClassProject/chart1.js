// set dimensions and margins of graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 1500 - margin.left - margin.right,
    height = 1600 - margin.top - margin.bottom;

// append svg object to the body of the page
var svg = d3.select("#chart1")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read data
d3.csv("ThePrisonIndustryData2020.csv", function(data) {

  // X axis
  var x = d3.scaleLinear()
    .domain([0, 1500])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

    // Y axis
  var y = d3.scaleLinear()
  .domain([0, 400000])
  .range([ height, 0]);
  
  svg.append("g")
  .call(d3.axisLeft(y));

  //console.log("add dot: " + data.Rank + ", " + data.AnnualRevenuesMn);

 // if (data.Rank <= 100){
  svg.append("circle")
      .attr("r", 5)
      .attr("cx", data.Rank)
      .attr("cy", data.AnnualRevenuesMn)
      .style("fill", "#4287f5");
 // };

  console.log("done");
})

d3.select("#chart1")
  .on("mousemove", function(event) {
    d3.select("#tooltip")
      .style("display", "block")
      .style("top", event.pageY + 20 + "px")
      .style("left", event.pageX + 20 + "px")})

      .on("mouseout", function() {
        d3.select("#tooltip")
          .style("display", "none");
  });