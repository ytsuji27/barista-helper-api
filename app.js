// Setting up Express
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
require('dotenv/config');
app.use(bodyParser.json());
// ------------ DATABASE ------------ //
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}, () => console.log('connected to DB!')
)


// ------------ ROUTES ------------ //
// Import Routes
const postsRoute = require('./routes/posts');

// Middlewares - Function that executes when a specific route is hit (like auth)
app.use('/posts', postsRoute);


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


// ------------ SERVER ------------ //
// Start listening to server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is up and listening on ${port}...`)
})

// Morgan helps to log http requests
// 'short' specifies the type of log (there are other options)
const morgan = require('morgan');
app.use(morgan('short'));