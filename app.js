"use strict";
const RPCClient = require("@alicloud/pop-core").RPCClient;
module.exports = (app) => {
  app.addSingleton("popCore", (config) => {
    const client = new RPCClient(config);
    return client;
  });
};
