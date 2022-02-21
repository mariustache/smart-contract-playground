
require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

const ropstenPrivateKey = process.env.ROPSTEN_PRIVATE_KEY;
const ropstenProvider = new HDWalletProvider({
  privateKeys: [ropstenPrivateKey],
  providerOrUrl: "https://ropsten.infura.io/v3/7edf861ec8024272adf786dcd594e8a3"
});

const rinkebyPrivateKey = process.env.RINKEBY_PRIVATE_KEY;
const rinkebyProvider = new HDWalletProvider({
  privateKeys: [rinkebyPrivateKey],
  providerOrUrl: "https://rinkeby.infura.io/v3/7edf861ec8024272adf786dcd594e8a3"
});

module.exports = {
  networks: {
    ropsten: {
      provider: ropstenProvider,
      network_id: 3
    },
    rinkeby: {
      provider: rinkebyProvider,
      network_id: 4
    },
    ganache: {
      host: "ganache-cli",
      port: 8545,
      network_id: "*"
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
