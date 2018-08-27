const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-Parser');
const port = process.env.PORT || 3000;
const queries = require('./queries');


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res,next) => {
  queries.getAll().then((data) => {
    res.json({data})
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
