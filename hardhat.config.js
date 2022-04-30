require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@tenderly/hardhat-tenderly");  // for tenderly

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || 'foo';

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const PRIVATE_KEY = process.env.PRIVATE_KEY || 'foo';

module.exports = {
  solidity: "0.7.3",
  networks: {
    // ropsten: {  todo
    //   url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    //   accounts: [`${PRIVATE_KEY}`]
    // },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  },
  tenderly: {
      username: "BlockchainAcademy",
      project: "HardhatTutorial"
  }
};
