import express from "express";
import cors from "cors";

const app = express();
const PORT = 9999

app.use(cors()); // Cross Origin Resource Sharing
app.use(express.json()) // befuellt den request.body wenn der content-type json ist



app.get('/api/v1/lkw', (req, res) => {
  res.end()
})

app.post('/api/v1/lkw', (req, res) => {
  const lkw = req.body
  console.log(lkw)
  res.end()
  /* const lkw = {
    fahrgestellnummer: req.body.fahrgestellnummer
  } */
})



app.listen(PORT, () => console.log('listening on port ' + PORT));
