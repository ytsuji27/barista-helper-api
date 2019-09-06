const express = require('express');
const app = express();

// Morgan helps to log http requests
// 'short' specifies the type of log (there are other options)
const morgan = require('morgan');
app.use(morgan('short'));

app.get('/', (req, res) => {
  console.log('Responding to root route');
  res.send('Hello from ROOT');
})

app.get('/users', (req, res) => {
  const user1 = {firstName: 'Stephen', lastName: 'Curry'};
  const user2 = {firstName: 'Kevin', lastName: 'Durant'};
  res.json([user1, user2]);
  // res.send('Nodemon auto updates when I save this file')
})

const port = 4000;
app.listen(port, () => {
  console.log(`Server is up and listening on ${port}...`)
})