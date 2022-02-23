const fs = require('fs') 

async function main() {
    const NftGenesis = await ethers.getContractFactory("NftGenesis")
  
    // Start deployment, returning a promise that resolves to a contract object
    const nft = await NftGenesis.deploy()
    await nft.deployed()
    console.log("Contract deployed to address:", nft.address)

    exports.contractAdress = nft.address;
}
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  