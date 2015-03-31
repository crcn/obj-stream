var expect = require("expect.js");
var stream = require("..");

describe(__filename + "#", function() {
  it("can be created with the new keyword", function() {
    new stream.Readable();
  });
});
