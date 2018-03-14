//I used the below in repl.it to reference during a live coding review
//I used the different types of requests to demostrate common uses of http requests, only get requests are made with params and queries
//At the very bottom I included an example of a native promise to try and explain how they were working

const axios = require('axios');

const baseUrl = "https://swapi.co/api"

// Get all people
axios.get(`${baseUrl}/people`).then(response => {
  console.log(response.data);
});

//Get people by id
// axios.get(`${baseUrl}/people/1`).then(response => {
//   console.log(response.data);
// });

// Get people by search query
// axios.get(`${baseUrl}/people?search=r2`).then(response => {
//   console.log(response.data);
// });

//More query information
// axios.get(`${baseUrl}/people/1/?format=wookiee`).then(response => {
//   console.log(response.data);
// });

// More query stuff

// axios.get(`${baseUrl}/starships?search=ds`).then(response => {
//   console.log(response.data);
// });


// let testPromise = new Promise(function(resolve, reject){
//   console.log("startTimeOut")
//   setTimeout(()=> {
//     resolve()
//     // reject()
//   }, 1000)

// })

// testPromise.then(response => {
//   console.log("hit response")
// }).catch(err => console.log())

// console.log("this will still run before our promise")