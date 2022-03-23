const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

//console.log(spaceXResult)

// Use d3 to find the latitude and longitude
d3.json(url).then(spaceX => {
    let location = spaceX.map(site => site.location.latitude + "," + site.location.longitude)
    console.log(location)

});

