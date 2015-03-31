[![Build Status](https://travis-ci.org/mojo-js/obj-stream.svg)](https://travis-ci.org/mojo-js/obj-stream) [![Coverage Status](https://coveralls.io/repos/mojo-js/obj-stream/badge.svg?branch=master)](https://coveralls.io/r/mojo-js/obj-stream?branch=master) [![Dependency Status](https://david-dm.org/mojo-js/obj-stream.svg)](https://david-dm.org/mojo-js/obj-stream) [![Join the chat at https://gitter.im/mojo-js/obj-stream](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mojo-js/obj-stream?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
