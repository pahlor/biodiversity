console.log(cityGrowths);

// Sort the cities in descending order of population growth.
// a and b are arbitrarily named. Here a is one city in the dataset and b is the next city listed in the dataset.
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// Select only the top five cities in terms of growth.
var topFiveCities = sortedCities.slice(0,5);

// Create separate arrays for the city names and their population growths.
// Use ParseInt to convert strings into integers
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// Use Plotly to create a bar chart with these arrays.
var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: {title: "City" },
  yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

// Top seven cities by population
var sortedCityPop = cityGrowths.sort((a,b) => a.population - b.population).reverse();

console.log(sortedCityPop);

//Separate arrays for top seven city names and population
var topSevenCities = sortedCityPop.slice(0,7);

var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityPop = topSevenCities.map(city => parseInt(city.population));

// Bar chart for top 7 city populations
var trace = {
    x: topSevenCityNames,
    y: topSevenCityPop,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Top Seven Cities by Population",
    xaxis: {title: "City" },
    yaxis: {title: "Population"}
  };
  Plotly.newPlot("bar-plot1", data, layout);