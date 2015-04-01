var protoclass = require("protoclass");
var Readable   = require("./readable");
var Stream     = require("./stream");
var Writable   = require("./writable");

/**
 */

function Through (stream) {
  this._stream = stream;
}

/**
 */

protoclass(Through, {
  push: function(object) {
    this._stream.write(object);
  }
});

/**
 */

module.exports = function(write, end) {
  var writable = new Writable();
  var stream   = new Stream(writable.reader);
  var through  = new Through(writable);

  stream.on("pipe", function(src) {

    var buffer  = [];
    var running = false;
    var ended   = false;

    function _write() {
      if (running) return;
      running = true;

      if (buffer.length) {
        return write.call(through, buffer.shift(), function() {
          running = false;
          _write();
        });
      }

      if (ended) {
        writable.end();
      }
    }

    src.on("data", function(data) {
      buffer.push(data);
      _write();
    }).on("end", function() {
      ended = true;
      _write();
    });
  });

  return stream;
};
