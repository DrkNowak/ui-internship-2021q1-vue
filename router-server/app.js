const express = require('express');
const cors = require('cors');
const fs = require('fs');

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

app.delete('/users:id', (req, res)=>{
  const  id  = req.params
  const desiredIndex = id.id.slice(1,id.id.length)
  users.forEach((element,index) => {
    
    
  if(element.id === parseInt(desiredIndex)) {
  
    users.splice(index,1);
  }
  });
 
  fs.writeFileSync('users.json', JSON.stringify(users))
  res.send('user deleted')
  
  
})