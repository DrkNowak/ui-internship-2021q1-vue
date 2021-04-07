import express from 'express';
import data from './dataSummary.js';

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  res.json(data);
});
