var protoclass = require("protoclass");

function Readable () {
  if (!(this instanceof Readable)) return new Readable();
}

protoclass(Readable, {

});

module.exports = Readable;
