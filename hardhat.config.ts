/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 import "@nomiclabs/hardhat-waffle";
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId : 1337
    }
  }
};
