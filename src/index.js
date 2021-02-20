//This is going to be the actual API file

//loaded express into project
const express = require("express");

const { request } = require("http");

//set up of API
//create a var called API
//run the express method
//once the server is set up that call back function is going to run
//console log (api up and running).
const api = express();
//dirname is path whichever script you're writing on
api.use(express.static(__dirname + '/public'));
api.use((req, res, next) =>{

});

//() => {} call back
api.listen(3000, () => {
  console.log("API up and running");
});

//lets do out first route
//route specific paths/URLS for ur server/domain
//when someone runs get request for specific path
//we want to present something inside of the callback function

//api.get("/", (req, res) => {
//   console.log(request);
//   //when we want to send something to the user we use
//   res.send("Hello World!");
// });

api.post('/add', (req, res) => {
  console.log('Post request received');
});
