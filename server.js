require('dotenv').config();
require('./lib/connect')();
const express = require('express');
const app = express();
const Tree = require('./lib/tree');

app.use(express.json());

app.get('/api/trees', (req, res, next) => {
  Tree.find()
    .then(trees => {
      res.json(trees);
    })
    .catch(next);
});

app.get('/api/trees/:id', (req, res, next) => {
  Tree.findById(req.params.id)
    .then(tree => {
      res.json(tree);
    })
    .catch(next);
});

app.post('/api/trees', (req, res, next) => {
  Tree.create(req.body)
    .then(tree => {
      res.json(tree);
    })
    .catch(next);
});

app.put('/api/trees/:id', (req, res, next) => {
  Tree.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
    .then(tree => {
      res.json(tree);
    })
    .catch(next);
});

app.delete('/api/trees/:id', (req, res, next) => {
  Tree.findByIdAndRemove(req.params.id)
    .then(removed => {
      res.json(removed);
    })
    .catch(next);
});

app.listen(3000, () => console.log('server running on 3000'));