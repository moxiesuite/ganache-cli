import node from 'node-loader!./node_modules/sha3/build/Release/sha3.node';
var Provider = require("@moxiesuite/ganache-core/lib/provider");
var Server = require("@moxiesuite/ganache-core/lib/server");

// This interface exists so as not to cause breaking changes.
module.exports = {
  server: function(options) {
    return Server.create(options);
  },
  provider: function(options) {
    return new Provider(options);
  }
};
