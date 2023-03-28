import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
const PORT = 9999

app.get('/', (req, res)=> {
  res.end()
});

// this is my get route
app.post('/', (req, res)=> {
  res.end('Hallo')
});

app.listen(PORT, () => console.log('listening on port ' + PORT));
