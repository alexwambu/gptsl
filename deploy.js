const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying from:", deployer.address);

  const Contract = await ethers.getContractFactory("GoldBarTether");
  const contract = await Contract.deploy("0x0000000000000000000000000000000000000000"); // Dummy oracle

  await contract.deployed();
  console.log("Deployed at:", contract.address);

  const fs = require("fs");
  fs.writeFileSync("react-frontend/src/contractAddress.txt", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
