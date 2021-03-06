var Effect = require('../Effect');
var reverb = require('soundbank-reverb');

module.exports = Effect.extend({

  type: 'reverb',

  props: {
    wet: ['volumeRange', true, 50],
    dry: ['volumeRange', true, 100],
    time: ['inclusivePositiveNumber', true, 1],
    decay: ['inclusivePositiveNumber', true, 3],
    cutoff: ['frequencyRange', true, 1000],
    filter: {
      type: 'string',
      default: 'highpass',
      values: ['highpass', 'lowpass', 'bandpass', 'lowshelf', 'highshelf', 'peaking', 'notch', 'allpass']
    },
    reverse: ['boolean', true, false]
  },

  createNode: function () {
    return reverb(this.context);
  },

  configureNode: function (node) {
    node.time = this.time;
    node.wet.value = this.wet / 100;
    node.dry.value = this.dry / 100;
    node.filterType = this.filter;
    node.cutoff.value = this.cutoff;
    node.decay = this.decay;
    node.reverse = this.reverse;
  }
});
