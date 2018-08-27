const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-Parser');
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res,next) => {
  res.send('hello world');
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
