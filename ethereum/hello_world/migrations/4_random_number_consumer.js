const RandomNumberConsumer = artifacts.require("RandomNumberConsumer");

const vrfCoordinator = "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B";
const linkToken = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
module.exports = function (deployer) {
  deployer.deploy(RandomNumberConsumer, vrfCoordinator, linkToken);
};
