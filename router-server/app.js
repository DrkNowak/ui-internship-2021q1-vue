import express from 'express';
import dataSummary from './dataSummary.js';

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  res.json(dataSummary);
});