// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract RandomNumberConsumer is VRFConsumerBase {
    uint256 public result;

    constructor(address _coordinator, address _token) 
        VRFConsumerBase(_coordinator, _token) {
    }

    function getRandomNumber(bytes32 _keyHash, uint256 _fee) public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= _fee, "Not enough LINK.");
        return requestRandomness(_keyHash, _fee);
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        result = randomness;
    }

    function checkLinkBalance() public view returns (uint256 linkBalance) {
        return LINK.balanceOf(address(this));
    }
}