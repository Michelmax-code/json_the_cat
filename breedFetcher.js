const request = require('request');
const breed = process.argv[2];

const getBreed = (breed) => {
  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

  request(url, (error, response, body) => {
    if (error) {
      console.log('request error:', error); // Print the error if one occurred
    }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const info = JSON.parse(body); //console.log('data:', body) changed by this lane to print inside in an object ; // Print the HTML for the homepage.
    if (info.length === 0) {
      console.log('The breed requested does not exist!');
      return;
    }
    console.log((info[0].description));

  });

};

getBreed(breed);