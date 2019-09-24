require('dotenv').config();
const connect = require('./lib/connect');
const mongoose = require('mongoose');

connect();

const Tree = require('./lib/tree');

Tree.create({
  name: 'cedar',
  appearance: {
    leafType: 'needle',
    leafLobes: 0,
    alternateBranching: true
  },
  lifeCycle: ['coniferous']
})
  .then(createdTree => {
    console.log(createdTree);
  })
  .then(() => {
    mongoose.disconnect();
  });

// Tree.findByIdAndUpdate(
//   '',
//   { name: 'douglas fir'}
// )
//   .then(trees => {
//     console.log(trees);
//   })
//   .then(() => {
//     mongoose.disconnect();
//   });