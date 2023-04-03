import express from "express";
import cors from "cors";
import { load, save } from './util/fileStorage.js';
import { body, validationResult } from 'express-validator';
const app = express();
const PORT = process.env.PORT || 9999

app.use(cors()); // Cross Origin Resource Sharing
app.use(express.json()) // befuellt den request.body wenn der content-type json ist



app.get('/api/v1/lkw', (req, res) => {
  load()
  .then(data => res.json(data))
  .catch(err => {
    console.log(err)
    res.status(500).end()})
})

app.post('/api/v1/lkw', 
body('hersteller').isString(), (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({error: errors.array()})
  }
  const lkw = req.body
  console.log(lkw)
  save(lkw)
  .then(data => res.json(data))
  .catch(err => {
    console.log(err)
    res.status(404)
    res.end()})
  })
  




app.listen(PORT, () => console.log('listening on port ' + PORT));
