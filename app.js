// const express = require('express');
// const app = express();
 
// const name = process.env.NAME;




// app.get('/', (req, res) => {
//   res.send(`Hello ${name}`);
  
//   let date = new Date();
//   let currentTime = date.toLocaleString();
//   res.send(`The current time and date is: ${currentTime}`);
  
// });
 
// app.listen(4000, () => {
//   console.log('Server running on port 4000');

// });


const express = require('express');
const app = express();
 
 
 
const name = process.env.NAME;
  let date = new Date()
  let currentTime = date.toLocaleString()
 
app.get('/', (req, res) => {
  res.send(`${currentTime} Hello ${name}`);
 
});
 
 
 
app.listen(4000, () => {
  console.log('Server running on port 4000');
});