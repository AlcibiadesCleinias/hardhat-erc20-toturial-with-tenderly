const hre = require("hardhat");

const addressToCheck = '0x5d1357c66DBb1eF5704c69142Ea21eaf9052ebD2';

async function main() {
  const provider = hre.waffle.provider;
  const balanceInWei = await provider.getBalance(addressToCheck);

  console.log("balance:", hre.ethers.utils.formatEther(balanceInWei));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
