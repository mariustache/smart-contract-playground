#include <eosio/eosio.hpp>

class [[eosio::contract]] hello : public eosio::contract {
public:
    using eosio::contract::contract;

    [[eosio::action]]
    void hi(eosio::name user) {
        eosio::require_auth(user);
        eosio::print("Hello, ", user);
    }
};