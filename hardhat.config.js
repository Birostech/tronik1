require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xd9727e58dcaa2bc1bb281db5d6f55a8b337e1bb7a721773af580ea4e66bc46c0"], //Your private key starting with "0x"
    },
  },
};
