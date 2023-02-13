
require("@nomicfoundation/hardhat-toolbox");
const BSCTESTNET_PRIVATE_KEY =
  "7936cb60898af101cdd512d6788cdf746b900ff0c16d7d509944dc96af0655d8";
const config = {
  solidity: "0.8.17",
  // add goerli network
  networks: {
    "bsc-testnet": {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545",
      accounts: [BSCTESTNET_PRIVATE_KEY],
    },
    "goerli": {
      url: "https://endpoints.omniatech.io/v1/eth/goerli/public",
      accounts: [BSCTESTNET_PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: "51BMN3MRQ7IIVFIIT7F6SN2I7N484UZ5KF", // Your Etherscan API key
  },

};

module.exports = config;
