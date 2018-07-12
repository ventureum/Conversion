pragma solidity ^0.4.24;


library Conversion {
    function storageConversion(uint realData) public pure returns(uint) {
        require(realData != uint(-1));

        if (realData == 0) {
            return uint(-1);
        }
        return realData;
    }

    function takeOutConversion(uint storageData) public pure returns(uint) {
        require(storageData != 0);

        if (storageData == uint(-1)) {
            return 0;
        }
        return storageData;
    }
}
