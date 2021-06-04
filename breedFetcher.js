const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return null; // Print the error if one occurred
    }
    if (response.statusCode !== 200) {
      callback('statusCode: ' + response.statusCode, null); // Print the response status code if a response was received
      return;
    }
    const info = JSON.parse(body); //console.log('data:', body) changed by this lane to print inside in an object ; // Print the HTML for the homepage.
    if (info.length === 0) {
      callback('The breed requested does not exist!');
      return null;
    }
    callback(null, info[0].description);
  });
};

module.exports = { fetchBreedDescription };