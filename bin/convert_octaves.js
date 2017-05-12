#!/usr/bin/env node
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const octaves = require('../maps/octaves');

const flat = _.reduce(octaves, (total, notes, octave) => {
  _.each(notes, (frequency, note) => {
    total[note + octave] = frequency;
  });

  return total;
}, {});

var flatJSON = JSON.stringify(flat, null, 2);
fs.writeFile(path.resolve('./maps/default.json'), flatJSON, (err) => {
  if (err) throw err;
  console.log('done');
});
