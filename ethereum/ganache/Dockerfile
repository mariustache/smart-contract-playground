FROM trufflesuite/ganache-cli:latest
WORKDIR /db
ARG GANACHE_MNEMONIC
CMD ["ganache-cli", "--networkId", "1000", "-h", "0.0.0.0", "--mnemonic", "${GANACHE_MNEMONIC}", "--db", "."]