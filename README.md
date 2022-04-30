# hardhat-erc20-toturial-with-tenderly
For token tutorial ref to https://hardhat.org/tutorial/creating-a-new-hardhat-project.html

# Tips
- fresh init and start
```
mkdir hardhat-tutorial
cd hardhat-tutorial\nnpm init --yes
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
npx hardhat compile
```

- others
```
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network rinkeby
```

# Hardhat & Tenderly
You have to have a special `deployments` folder, 
ref to https://github.com/Tenderly/hardhat-tenderly#how-to-set-up-hardhat-with-tenderly-cli

## How Tenderly Aware About Your Deployments
Add a special method after deployed contract (according to docs)
```
await hre.tenderly.persistArtifacts({
    name: "Greeter",
    address: greeter.address,
})
```

## How to use the tenderly

### Vanilla
Firstly, you should abuse hardhat run scripts command (e.g run scripts/deploy.js) to create a necessarily deployments folder, 
to proceed with `tenderly init` command as it is via: https://dashboard.tenderly.co/BlockchainAcademy/project/contracts/add?method=cli

### To Export command to debug and profile local transactions
ref to http://blog.tenderly.co/level-up-your-smart-contract-productivity-using-hardhat-and-tenderly/
1. `npx hardhat run --network localhost scripts/deploy.js`
2. `tenderly export init`
3. `tenderly export <UR Transactipn hash>`

## Verify Command
```npx hardhat --network rinkeby tenderly:verify Token=0xD6858a58696247830fb9E419C3BdE5efF9E68367
```
> by verifying you push (`tenderly push`) as well
