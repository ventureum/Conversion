import EVMRevert from 'openzeppelin-solidity/test/helpers/EVMRevert'

const ConversionMock = artifacts.require('ConversionMock')

const BigNumber = web3.BigNumber

const should = require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

const UINT_NEG_ONE = '115792089237316195423570985008687907853269984665640564039457584007913129639935'
contract('Conversion Test', function (accounts) {
  let conversion

  before(async function() {
    conversion = await ConversionMock.deployed();
  })

  describe('Conversion contract normal use test', function () {
    it('should be able storage conversion unzero number', async function () {
      const num = 2054
      const afterConversion = await conversion.storageConversion(num)
      afterConversion.should.be.bignumber.equal(num)
    })

    it('should be able storage conversion zero', async function () {
      const num = 0
      const afterConversion = await conversion.storageConversion(num)
      afterConversion.should.be.bignumber.equal(UINT_NEG_ONE)
    })

    it('should be able take out conversion uint(-1)', async function () {
      const num = UINT_NEG_ONE
      const afterConversion = await conversion.takeOutConversion(num)
      afterConversion.should.be.bignumber.equal(0)
    })

    it('should be able take out anything inside (0, -1)', async function () {
      const num = 232
      const afterConversion = await conversion.takeOutConversion(num)
      afterConversion.should.be.bignumber.equal(num)
    })
  })

  describe('Conversion contract branch test', function () {
    it('should be reject storage conversion uint(-1)', async function () {
      const num = UINT_NEG_ONE
      await conversion.storageConversion(num).should.be.rejectedWith(EVMRevert)
    })

    it('should be reject take out conversion 0', async function () {
      const num = 0
      await conversion.takeOutConversion(num).should.be.rejectedWith(EVMRevert)
    })
  })
})
