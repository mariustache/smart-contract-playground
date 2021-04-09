# Hello world project using Truffle

Run ```truffle init``` to create an empty Truffle project.

* Compile with ```truffle compile```.
* Deploy with ```truffle migrate```. 
* Test with ```truffle test```.

Before running the deployment, make sure you have an Ethereum client running (e.g. Ganache).

Tests are based on the **Mocha** framework syntax (you can use **contract** instead of **describe**).

# Local blockchain
**Ganache** is used. Add *truffle-config.js* to settings/workspace.
# Ethereum Testnet
**Infura** is used to connect to the Ethereum network (Ropsten testnet).
Secure information such as private keys should not appear explicitly in the source code. To ensure this requirement, private information is stored in an **.env** file. You can opt to use a mnemonic or a private key in order to instantiate the provider (through HDWalletProvider). See https://www.npmjs.com/package/@truffle/hdwallet-provider for more details.


