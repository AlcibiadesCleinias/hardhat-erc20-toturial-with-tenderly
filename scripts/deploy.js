// example of script that is deployed and verified via tenderly
// (if you use supported networks)
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed()

  await hre.tenderly.persistArtifacts({
    name: "Token",
    address: token.address,
  })

  await hre.tenderly.verify({
    name: "Token",
    address: token.address,
  })

  console.log("Token deployed at address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
