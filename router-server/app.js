import express from 'express';
import dataSummary from './dataSummary.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.listen(3000);

app.get('/', (req, res) => {
  res.json(dataSummary);
});
