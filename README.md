[![Build Status](https://travis-ci.org/mojo-js/obj-stream.svg)](https://travis-ci.org/mojo-js/obj-stream) [![Coverage Status](https://coveralls.io/repos/mojo-js/obj-stream/badge.svg?branch=master)](https://coveralls.io/r/mojo-js/obj-stream?branch=master) [![Dependency Status](https://david-dm.org/mojo-js/obj-stream.svg)](https://david-dm.org/mojo-js/obj-stream) 

A lightweight object stream library for NodeJS and the browser.

```javascript
var stream = require("obj-stream");

var stream = new stream.Stream();
stream.write({ name: "obj" }); // valid
stream.write("blah"); // invalid
stream.end();

var readable = new stream.Readable([{ name: "obj" }]);
readable.pipe(new stream.Stream());
```
