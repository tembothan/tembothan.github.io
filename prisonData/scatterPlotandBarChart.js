/* ---------------------------------------------------------------- SCATTER PLOT GRAPH ---------------------------------------------------------------- */
// dimensions and margins of graph
var margin = {top: 20, right: 70, bottom: 20, left: 50};
scatterWidth = 1100 - margin.left - margin.right,
scatterHeight = 700;

// X axis
var x = d3.scaleLinear()
.domain([0, 700000])
.range([ 0, scatterWidth ]);

// Y axis
var y = d3.scaleLinear()
.domain([0, 350000])
.range([scatterHeight, 0]);

var XEmployees = d3.axisBottom(x);
var YAnnualRevenuesMn = d3.axisLeft(y);

// add svg to scatter plot div
var scatterSVG = d3.select("#scatterPlot")
.append("svg")
.attr("width", scatterWidth + margin.left + margin.right)
.attr("height", scatterHeight + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Read data
d3.csv("ThePrisonIndustryData2020Cleaned.csv", function(error, data) {
  
  if (error) throw error;

  scatterSVG.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + scatterHeight + ")")
      .call(XEmployees);

  scatterSVG.append("g")
      .attr("class", "y axis")
      .call(YAnnualRevenuesMn);

  data.forEach(function(d) {
      Employees = d.Employees;
      AnnualRevenuesMn = d.AnnualRevenuesMn;
      Continent = d.Continent;

  scatterSVG.append("circle")
    .attr("cx", Employees)
    .attr("cy", AnnualRevenuesMn)
    .attr("r", 2)
    .style("fill", function() {
      switch(Continent) {
      case 'Africa':
        return "#5F80FA";
      case 'Asia':
        return "#F9ACFA";
      case 'Europe':
        return "#82FFD2";    
      case 'SouthAmerica':
        return "#FF5026";
      case 'Australia':
        return '#FAF8A9'; 
      case 'NorthAmerica':
        return "#E000D1";
      default:
        console.log(Continent)
        return "#ffffff"
      }
    })
  });  

});

/* ---------------------------------------------------------------- SCATTER PLOT KEY ---------------------------------------------------------------- */

var key = d3.select("#scatterPlotKey")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", 80)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

key.append("circle").attr("cx",20).attr("cy",15).attr("r", 6).style("fill", "#F9ACFA")
key.append("text").attr("x", 30).attr("y", 15).text("Asia").style("font-size", "15px").attr("alignment-baseline","middle").style("fill", "white")

key.append("circle").attr("cx",100).attr("cy",15).attr("r", 6).style("fill", "#82FFD2")
key.append("text").attr("x", 110).attr("y", 15).text("Europe").style("font-size", "15px").attr("alignment-baseline","middle").style("fill", "white")

key.append("circle").attr("cx",190).attr("cy",15).attr("r", 6).style("fill", "#E000D1")
key.append("text").attr("x", 200).attr("y", 15).text("North America").style("font-size", "15px").attr("alignment-baseline","middle").style("fill", "white")

key.append("circle").attr("cx",320).attr("cy",15).attr("r", 6).style("fill", "#FAF8A9")
key.append("text").attr("x", 330).attr("y", 15).text("Australia").style("font-size", "15px").attr("alignment-baseline","middle").style("fill", "white")

key.append("circle").attr("cx",410).attr("cy",15).attr("r", 6).style("fill", "#FF5026")
key.append("text").attr("x", 420).attr("y", 15).text("South America").style("font-size", "15px").attr("alignment-baseline","middle").style("fill", "white")

key.append("circle").attr("cx",540).attr("cy",15).attr("r", 6).style("fill", "#5F80FA")
key.append("text").attr("x", 550).attr("y", 15).text("Africa").style("font-size", "15px").attr("alignment-baseline","middle").style("fill", "white")

/* ---------------------------------------------------------------- BAR CHART ---------------------------------------------------------------- */

// set the dimensions and margins of the graph
var margin = {top: 50, right: 30, bottom: 90, left: 70},
    width = 800 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#barChart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")
          ;

// Parse the Data
d3.csv("ThePrisonIndustryData2020TopTen.csv", function(data) {

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(function(d) { return d.Company; }))
  .padding(0.2);

  svg.append("g")
  .attr("class", "x domain")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 350000])
  .range([ height, 0]);

  svg.append("g")
  .attr("class", "y domain")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", function(d) { console.log(d.Company); return x(d.Company); })
    .attr("width", 45)
    .style("fill", function(d) {
      switch(d.Continent) {
      case 'Europe':
        return "#82FFD2";    
      case 'NorthAmerica':
        return "#E000D1";
      default:
        console.log(Continent)
        return "#ffffff"
      }
    })
    // no bar at the beginning thus:
    .attr("height", function(d) { return height - y(0); }) // always equal to 0
    .attr("y", function(d) { return y(0); })

// Animation
svg.selectAll("rect")
  .transition()
  .duration(2000)
  .attr("y", function(d) { return y(d.AnnualRevenuesMn); })
  .attr("height", function(d) { return height - y(d.AnnualRevenuesMn); })
  .delay(function(d,i){//console.log(i) ; 
    return(i*100)})

})

/* ---------------------------------------------------------------- BAR CHART KEY ---------------------------------------------------------------- */

var key = d3.select("#boxChartKey")
.append("svg")
.attr("width", 400 + margin.left + margin.right)
.attr("height", 60)
.append("g")
.attr("transform", "translate(" + 20 + "," + 30 + ")");

key.append("circle").attr("cx",50).attr("cy",5).attr("r", 6).style("fill", "#82FFD2")
key.append("text").attr("x", 60).attr("y", 5).text("Europe").style("font-size", "15px").attr("alignment-baseline","middle").style("fill", "white")

key.append("circle").attr("cx",130).attr("cy",5).attr("r", 6).style("fill", "#E000D1")
key.append("text").attr("x", 140).attr("y", 5).text("North America").style("font-size", "15px").attr("alignment-baseline","middle").style("fill", "white")

/* ---------------------------------------------------------------- 3D BAR CHART GRAPH ---------------------------------------------------------------- */

var origin = [300, 175], scale = 20, j = 9, cubesData = [], alpha = 0, beta = 0, startAngle = Math.PI/6;
var boxSVG = d3.select("#boxChart")
.append("svg")
.attr("width", width/2 + margin.left + margin.right)
.attr("height", 550)
.call(d3.drag()
.on('drag', dragged).on('start', dragStart).on('end', dragEnd)).append('g');

var color = d3.scaleOrdinal(d3.schemeCategory20);
var cubesGroup = boxSVG.append('g').attr('class', 'cubes');
var mx, my, mouseX, mouseY;
var Rev, companyName;

// make 3d cube
  var cubes3D = d3._3d()
        .shape('CUBE')
        .x(function(d){ return d.x; })
        .y(function(d){ return d.y; })
        .z(function(d){ return d.z; })
        .rotateY( startAngle)
        .rotateX(-startAngle)
        .origin(origin)
        .scale(scale);

    function processData(data, tt){

        /* --------- CUBES ---------*/

        var cubes = cubesGroup.selectAll('g.cube').data(data, function(d){ return d.id });

        var ce = cubes
            .enter()
            .append('g')
            .attr('class', 'cube')
            .attr('fill', function(d){ return color(d.id); })
            .attr('stroke', function(d){ return d3.color(color(d.id)).darker(2); })
            .merge(cubes)
            .sort(cubes3D.sort);

        cubes.exit().remove();

        /* --------- FACES ---------*/

        var faces = cubes.merge(ce).selectAll('path.face').data(function(d){ return d.faces; }, function(d){ return d.face; });

        faces.enter()
            .append('path')
            .attr('class', 'face')
            .attr('fill-opacity', 0.95)
            .classed('_3d', true)
            .merge(faces)
            .transition().duration(tt)
            .attr('d', cubes3D.draw);

        faces.exit().remove();

        /* --------- TEXT ---------*/

        var texts = cubes.merge(ce).selectAll('text.text').data(function(d){
            var _t = d.faces.filter(function(d){
                return d.face === 'top';
            });
            return [{height: d.height, centroid: _t[0].centroid}];
        });

        texts
            .enter()
            .append('text')
            .attr('class', 'text')
            .attr('dy', '-.7em')
            .attr('text-anchor', 'middle')
            .attr('font-family', 'sans-serif')
            .attr('font-weight', 'bolder')
            .attr('x', function(d){ return origin[0] + scale * d.centroid.x })
            .attr('y', function(d){ return origin[1] + scale * d.centroid.y })
            .classed('_3d', true)
            .merge(texts)
            .transition().duration(tt)
            .attr('fill', 'black')
            .attr('stroke', 'none')
            .attr('x', function(d){ return origin[0] + scale * d.centroid.x })
            .attr('y', function(d){ return origin[1] + scale * d.centroid.y })
            .tween('text', function(d){
                var that = d3.select(this);
                var i = d3.interpolateNumber(+that.text(), Math.abs(d.height));
                return function(t){
                    that.text(i(t).toFixed(1));
                };
            });

        texts.exit().remove();

        /* --------- SORT TEXT & FACES ---------*/

        ce.selectAll('._3d').sort(d3._3d().sort);

    }

    function init(){
        cubesData = [];
        var cnt = 0;
        for(var z = -j/2; z <= j/2; z = z + 5){
            for(var x = -j; x <= j; x = x + 5){
              d3.csv("ThePrisonIndustryData2020TopTen.csv", function(data) {
                data.forEach(function(d) {
                  Rev = d.AnnualRevenuesMn/10000;
                  companyName = d.Company;
                  //console.log("rev: " + Rev + " name: " + companyName);
              })
            })

            //console.log(Rev + " - " + companyName);

                var h = 13;
                var _cube = makeCube(h, x, z);
                  //console.log(cnt);
                  _cube.id = 'cube_' + cnt++;
                  _cube.height = h;
                  cubesData.push(_cube);
            }
        }
        processData(cubes3D(cubesData), 1000);
    }

    function dragStart(){
        mx = d3.event.x;
        my = d3.event.y;
    }

    function dragged(){
        mouseX = mouseX || 0;
        mouseY = mouseY || 0;
        beta   = (d3.event.x - mx + mouseX) * Math.PI / 230 ;
        alpha  = (d3.event.y - my + mouseY) * Math.PI / 230  * (-1);
        processData(cubes3D.rotateY(beta + startAngle).rotateX(alpha - startAngle)(cubesData), 0);
    }

    function dragEnd(){
        mouseX = d3.event.x - mx + mouseX;
        mouseY = d3.event.y - my + mouseY;
    }

    function makeCube(h, x, z){
        return [
            {x: x - 1, y: h, z: z + 1}, // FRONT TOP LEFT
            {x: x - 1, y: 0, z: z + 1}, // FRONT BOTTOM LEFT
            {x: x + 1, y: 0, z: z + 1}, // FRONT BOTTOM RIGHT
            {x: x + 1, y: h, z: z + 1}, // FRONT TOP RIGHT
            {x: x - 1, y: h, z: z - 1}, // BACK  TOP LEFT
            {x: x - 1, y: 0, z: z - 1}, // BACK  BOTTOM LEFT
            {x: x + 1, y: 0, z: z - 1}, // BACK  BOTTOM RIGHT
            {x: x + 1, y: h, z: z - 1}, // BACK  TOP RIGHT
        ];
    }

    init();
    