# EOS playground

First step is to set up a local environment using the instructions from the EOS official documentation: https://developers.eos.io/welcome/latest/getting-started-guide/local-development-environment/index

# Hello world contract
https://developers.eos.io/welcome/latest/smart-contract-guides/hello-world

In order to deploy a contract, you need an account associated with that contract.

Commands:
* **cleos create account** - create new accounts.
* **cleos set contract** - deploy compiled **.wasm** and **.abi** artifacts to the. blockchain
* **cleos push action** - interact with the contract.

To compile the **hello** contract, run the following command:
```
eosio-cpp hello.cpp -o hello.wasm
```
This will generate an additional **hello.abi** file.
