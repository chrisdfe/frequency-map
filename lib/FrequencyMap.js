const frequencies = require('../data/frequencies');

class FrequencyMap {

  static getOctave(octave) {
    return frequencies[octave];
  }

  static get(note, octave = 4) {
    const frequencies = this.getOctave(octave);

    if (frequencies) {
      return frequencies[note];
    }

    return null;
  }
}

module.exports = FrequencyMap;
