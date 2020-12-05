import { task } from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const ETH_TEST_KEY = process.env.ETH_TEST_PKEY;
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;

export default {
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    // overrides: {
    //   'contracts/test/TestPremiaOption.sol': {
    //     version: '0.6.12',
    //     settings: {
    //       enabled: false,
    //     },
    //   },
    // },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [ETH_TEST_KEY],
      //gas: 120000000000,
      blockGasLimit: 120000000000,
      //gasPrice: 10,
      timeout: 40000,
    },
  },
};
