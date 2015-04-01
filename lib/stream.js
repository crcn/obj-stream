var protoclass = require("protoclass");
var Writer     = require("./writable");

/**
 */

function Stream (reader) {
  if (!(this instanceof Stream)) return new Stream();
  this._writer = new Writer();
  this._reader = reader || this._writer.reader;
}

/**
 */

protoclass(Stream, {

  /**
   */

  readable: true,
  writable: true,

  /**
   */

  pause: function() {
    return this._reader.pause();
  },

  /**
   */

  resume: function() {
    return this._reader.resume();
  },

  /**
   */

  write: function(object) {
    return this._writer.write.apply(this._writer, arguments);
  },

  /**
   */

  end: function(object) {
    return this._writer.end.apply(this._writer, arguments);
  },

  /**
   */

  emit: function() {
    return this._reader.emit.apply(this._reader, arguments);
  },

  /**
   */

  on: function() {
    return this._reader.on.apply(this._reader, arguments);
  },

  /**
   */

  removeListener: function() {
    return this._reader.removeListener.apply(this._reader, arguments);
  },

  /**
   */

  pipe: function() {
    return this._reader.pipe.apply(this._reader, arguments);
  }
});

module.exports = Stream;
