var expect = require("expect.js");
var stream = require("..");

describe(__filename + "#", function() {

  it("can be created", function() {
    var s1 = stream.stream();
    var items = [];
    s1.pipe(stream.through(function(obj, next) {
      for (var i = 5; i--;) this.push(1);
      next();
    })).on("data", items.push.bind(items));
    s1.end("ab");
    expect(items.length).to.be(5);
  });

  it("next can be async", function(next) {
    var s1 = stream.stream();
    var items = [];
    s1.pipe(stream.through(function(obj, next) {
      this.push(obj);
      process.nextTick(next);
    })).on("data", items.push.bind(items));
    s1.write("ab");
    expect(items.length).to.be(1);
    s1.write("ab");
    s1.write("ab");
    s1.write("ab");
    setTimeout(function() {
      expect(items[0]).to.be("ab");
      next();
    }, 10);
  });

});
