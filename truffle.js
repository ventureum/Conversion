// babel does not transpile js in node_modules, we need to ignore them
require('babel-register')({
  ignore: /node_modules\/(?!openzeppelin-solidity\/test\/helpers)/
})
require('babel-polyfill')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 6000000
    },
    testing: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 6000000
    },
    coverage: {
      host: '127.0.0.1',
      network_id: '*',
      port: 8555, // <-- If you change this, also set the port option in .solcover.js.
      gas: 0xfffffffffff, // <-- Use this high gas value
      gasPrice: 0x01 // <-- Use this low gas price
    }
  }
}
