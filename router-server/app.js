const express = require('express');
const cors = require('cors');

const dataSummary = require('./dataSummary.json');
const users = require('./users.json');

const app = express();
app.use(cors());

app.listen(3000);

app.get('/', (req, res) =>{
  setTimeout(() => res.json(dataSummary), 3);
  
})

app.get('/users', (req, res) =>{
  setTimeout(() => res.json(users), 3);
  
})