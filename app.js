const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const queries = require('./queries');


app.use(bodyParser.json());
app.use(cors());

app.get('/books', (req,res,next) => {
  queries.getAllBooks().then((data) => {
    res.json({data})
  })
})

app.get('/authors', (req,res,next) => {
  queries.getAllAuthors().then((data) => {
    res.json({data})
  })
})

app.get('/books/:id', (req,res,next) => {
  queries.getOne(req.params.id).then((data) => {
    res.json({data})
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
