# Docker commands
```
docker-compose up -d
docker-compose logs --follow
docker-compose stop
docker-compose start
```
# Local blockchain
**Ganache** is used. Add *truffle-config.js* to settings/workspace.

# Ethereum Testnet
**Infura** is used to connect to the Ethereum network (Ropsten testnet).
Secure information such as private keys should not appear explicitly in the source code. To ensure this requirement, private information is stored in an **.env** file. You can opt to use a mnemonic or a private key in order to instantiate the provider (through HDWalletProvider). See https://www.npmjs.com/package/@truffle/hdwallet-provider for more details.

# Environment variables to be defined
- GANACHE_MNEMONIC