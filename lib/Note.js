var PositionModel = require('./PositionModel');
var rawKeys = ['position', 'target', 'duration', 'volume', 'pitch', 'pan'];
var numberInRangeType = require('./types/numberInRange');
var regexpType = require('./types/regexp');
var triggerParams = require('./mixins/triggerParams');
var volumeParams = require('./mixins/volumeParams');
var oscillatorParams = require('./mixins/oscillatorParams');
var sampleParams = require('./mixins/sampleParams');
var connectable = require('./mixins/connectable');
var bypassable = require('./mixins/bypassable');

var Note = PositionModel.extend(triggerParams, volumeParams, oscillatorParams, sampleParams, connectable, bypassable, {

  type: 'note',

  props: {
    target: ['target', false],
    ghosts: ['array', true, function () { return []; }],
    transform: 'function',
    after: 'function',
    data: 'object'
  },

  dataTypes: {
    target: regexpType('target', /^(\d+)(A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)$/),
    positiveNumber: numberInRangeType('positiveNumber', 1, Infinity)
  },

  initialize: function () {
    PositionModel.prototype.initialize.apply(this, arguments);

    this.on('started', this._delegateStarted);
    this.on('stopped', this._delegateStopped);
  },

  _delegateStarted: function (note, params) {
    if (this.original && this.original !== this) {
      this.original.trigger('started', note, params);
    }
  },

  _delegateStopped: function (note, params) {
    if (this.original && this.original !== this) {
      this.original.trigger('stopped', note, params);
    }
  },

  start: function (time) {
    if (!this.mute) {
      this.trigger('start', time, this);
    }
  },

  stop: function (time) {
    this.trigger('stop', time, this);
  },

  hasPlainPosition: function () {
    return Note.isPlainPosition(this.position);
  }
});

var plainPositionRE = /^\d+\.\d+\.\d+$/;
Note.isPlainPosition = function (position) {
  return plainPositionRE.test(position);
};

Note.fromRaw = function (raw) {
  var attributes = {};
  var last = raw[raw.length - 1];
  if (typeof last === 'object' && last !== null) {
    attributes = raw.pop();
  }
  raw.forEach(function (value, index) {
    var key = rawKeys[index];
    if (key && value) {
      attributes[key] = value;
    }
  });
  return new Note(attributes);
};

module.exports = Note;
