const express = require('express');
const cors = require('cors');
const fs = require('fs');

const dataSummary = require('./dataSummary.json');
let users = require('./users.json');
const roles = require('./roles.json');

const app = express();

app.use(cors());
app.listen(3000);

app.get('/', (req, res) =>{
  setTimeout(() => res.json(dataSummary), 3);
  
})

app.get('/users', (req, res) =>{
  setTimeout(() => res.json(users), 3);
  
})

app.delete('/users/::id', (req, res)=>{
  const id = req.params.id;
  
  users = users.filter(element => (element.id !== parseInt(id)));

  fs.writeFileSync('users.json', JSON.stringify(users));
  res.send('user deleted');

})

app.get('/roles', (req, res) =>{
  res.json(roles);
  
})
