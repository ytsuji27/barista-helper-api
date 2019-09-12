// To start server, npm start

const express = require('express');
const app = express();

// MongoDB stuff
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

mongo.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }
})

// Morgan helps to log http requests
// 'short' specifies the type of log (there are other options)
const morgan = require('morgan');
app.use(morgan('short'));

// MIDDLEWARES - Function that executes when a specific route is hit
app.use('/users', () => {
  console.log('This is a middleware');
})

// ROUTES
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

// Start listening to server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is up and listening on ${port}...`)
})