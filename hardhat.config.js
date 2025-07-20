require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

