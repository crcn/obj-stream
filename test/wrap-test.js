var expect = require("expect.js");
var stream = require("..");

describe(__filename + "#", function() {
  it("can wrap a callback as a streamable", function(next) {
    var streamable = stream.wrap(function(o, next) {
      next(void 0, o.name);
    });

    streamable({name:"blah"}).on("data", function(name) {
      expect(name).to.be("blah");
      next();
    });
  });

  it("can wrap a callback as a streamable and emit an error", function(next) {
    var streamable = stream.wrap(function(o, next) {
      next(o.name);
    });

    streamable({name:"blah"}).on("error", function(error) {
      expect(error).to.be("blah");
      next();
    });
  });
});
