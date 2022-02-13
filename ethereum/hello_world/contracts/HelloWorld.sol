// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract HelloWorld {
    
    string message;

    constructor() public {
        message = "Hello World!";
    }

    function print() public view returns (string memory) {
        return message;
    }
}