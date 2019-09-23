const Tree = require('../lib/tree');
const mongoose = require('mongoose');

describe('Tree model', () => {
  
  it('validates model with valid properties', () => {
    const data = {
      name: 'cedar',
      appearance: {
        leafType: 'needle',
        leafLobes: 0,
        alternateBranching: true
      },
      lifeCycle: ['coniferous']
    }

    const tree = new Tree(data);
    const errors = tree.validateSync();
    expect(errors).toBeUndefined();

    const json = tree.toJSON();

    expect(json).toEqual({
      ...data,
      _id: expect.any(Object),
    })
  })

  it('validates required properties', () => {
    const data = {};
    const tree = new Tree(data);
    const { errors } = tree.validateSync();
    expect(errors.name.kind).toBe('required');
    expect(errors['appearance.leafType'].kind).toBe('required');
  })

  it('populates default properties', () => {
    const data = {
      name: 'cedar',
      appearance: {
        leafType: 'needle',
        leafLobes: 0,
      },
      lifeCycle: ['coniferous']
    }
    const tree = new Tree(data);
    const err = tree.validateSync();
    expect(err).toBeUndefined();

    expect(tree.appearance.alternateBranching).toBe(true);
  })
})