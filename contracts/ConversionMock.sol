pragma solidity ^0.4.24;

import "./Conversion.sol";


contract ConversionMock {
    function storageConversion(uint realData) public pure returns(uint) {
        return Conversion.storageConversion(realData);
    }

    function takeOutConversion(uint storageData) public pure returns(uint) {
        return Conversion.takeOutConversion(storageData);
    }
}
