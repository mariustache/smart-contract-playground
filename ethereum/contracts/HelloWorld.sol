pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    
    string message;

    constructor() public {
        message = "Hello World!";
    }

    function print() public view returns (string memory) {
        return message;
    }
}