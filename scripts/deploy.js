const hre = require("hardhat");

async function main() {
  const NGNC = await hre.ethers.getContractFactory("NGNC");
  const ngnc = await NGNC.deploy();
  await ngnc.deployed();
  console.log("✅ NGNC deployed to:", ngnc.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

