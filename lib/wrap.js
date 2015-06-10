var Stream = require("./stream");

module.exports = function(fn) {
  return function() {
    var s = new Stream();
    setTimeout(function(args) {
      fn.apply(void 0, args.concat(function(err, data) {
        if (err) return s.emit("error", err);
        s.end(data);
      }));
    }, 0, Array.prototype.slice.call(arguments));
    return s;
  }
}
