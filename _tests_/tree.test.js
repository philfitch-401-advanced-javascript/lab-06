const Tree = require('../lib/tree');
const mongoose = require('mongoose');

describe('Tree model', () => {
  
  it('validates model with valid properties', () => {
    const data = {
      name: 'cedar',
      appearance: {
        leaf: 'needle',
        leafLobes: 0,
        alternateBranching: true
      },
      lifeCycle: ['coniferous']
    }

    const tree = new Tree(data);
    const errors = tree.validateSync();
    expect(errors).toBeUndefined();
  })
})