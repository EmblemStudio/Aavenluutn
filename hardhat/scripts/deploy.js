// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const fs = require('fs')

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // console.log(hre.network)

  // We get the contracts to deploy
  const NarratorNFTs = await hre.ethers.getContractFactory("NarratorNFTs");
  const narratorNFTs = await NarratorNFTs.deploy()
  const Publisher = await hre.ethers.getContractFactory("Publisher");
  const publisher = await Publisher.deploy(
    15 * 60,
    100 * 60,
    hre.ethers.utils.parseEther('0.001'),
    5,
    "TESTavenluutn: the grand adventure",
    "TATGA",
  );

  await narratorNFTs.deployed();
  await publisher.deployed();

  console.log("Publisher deployed to:", publisher.address);
  fs.writeFileSync('PublisherAddress.txt', publisher.address)
  console.log("NarratorNFTs deployed to:", narratorNFTs.address);
  fs.writeFileSync('NarratorNFTsAddress.txt', narratorNFTs.address)

  /**
   * add test narratorNFT
   */
  const narratorTx = await narratorNFTs.mint(
    "0x9b8d5AF3625d81bb3376916c4D98A20B98b85bCF", // Squad Test
    "https://gist.githubusercontent.com/jessebmiller/9295f7e34e05efc7c6e66b84c9f459de/raw/7a1c1583ca68cfb71fb3f351176a9468b0667669/bundle.js"
  )

  // add test narrator
  /*
  let pubTx = await publisher.addNarrator(
    narratorNFTs.address,
    0,
    1,
    10,
    100,
    1000,
    10000,
  )
  */
  await narratorTx.wait()
  // await pubTx.wait()

  const now = parseInt((new Date().getTime() / 1000).toFixed(0))
  const pubTx = await publisher.addNarrator(
    narratorNFTs.address,
    0,
    now,              // start
    100,              // totalCollections
    60 * 60,          // collectionLength
    60 * 60 * 3 / 2,  // collectionSpacing
    5,                // collectionSize
  )
  const receipt = await pubTx.wait()
  console.log("New narrator added at index:", Number(receipt.events[0].args.count))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
