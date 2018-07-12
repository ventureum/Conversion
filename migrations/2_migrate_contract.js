const ConversionMock = artifacts.require('./ConversionMock.sol')
const Conversion = artifacts.require('./Conversion.sol')

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Conversion).then(function () {
    return deployer.link(Conversion, [ConversionMock])
  }).then(function () {
    return deployer.deploy(ConversionMock)
  })
}
