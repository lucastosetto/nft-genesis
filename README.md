# **NFT Genesis**

This is a simple project I did on my first week of Blockchain studies, which consists of:

a. A smart contract that enables an NFT minting.
b. A script to deploy this smart contract into Ropsten test network.
c. A script to mint a NFT by interacting with the smart contract.

## **1. Motivations**

Well, I wanna learn about Blockchain development and NFTs are cool, so why not?

Jokes aside, the coolest thing about Blockchain and the metaverse is the idea of decentralization, which we cannot fully embrace if we rely on third parties to interact with the web3.

I wanna be a part of this growing community and help building it, so I choose this project to start with for the following reasons:

- First of all its simple and the requirements are well documented.
- I believe we haven't unlocked the full NFT power yet and there are a lot of problems that it can help solve. Cryptocurrencies are more straightforward, so I wanted to be able to start thinking of some creative stuff.

## **2. Used Tools**

- **Solidity:** for the smart contract.
- **Javascript (NodeJS):** deploy and mint scripts.
- **OpenZeppelin:** definition of the ERC-721 standards.
- **Hardhat:** Ethereum development environment.
- **Pinata:** IPFS management for the NFT.
- **Etherscan:** to check our transactions.
- **Alchemy:** for deployment in blockchain.
- **Metamask:** wallet used to deploy the smart contract and view the cool NFT.

## **3. Usage**

I won't go too deep into the project setup, as I imagine if you are trying to use it you may know something about the subject... But if you don't, I'll be glad to help you, so just contact me in any of the links in my profile!

With that being said, you will need to install the following in order to run the project: `npm`, `node`, `hardhat` and `yarn`... Sorry if I missed something. Also, you will need [Metamask](https://metamask.zendesk.com/hc/en-us), [Alchemy](https://www.alchemy.com/) and [Pinata](https://app.pinata.cloud/pinmanager) accounts and some fake ETH that you can grab from [Faucet](https://faucet.metamask.io/).

Clone this repository:

```
git clone https://github.com/lucastosetto/nft-genesis.git
```

Run the following command to install dependencies:

```
yarn install
```

Compile the project:

```
npx compile
```

In the project root directory, create a `.env` file:


```
touch .env
```

Add the following to this file (replace the variables accordingly):

```
API_URL=https://eth-ropsten.alchemyapi.io/v2/<your-api-key>
PRIVATE_KEY=<your-private-key>
PUBLIC_KEY=<your-account-address>
```

Let's deploy our smart contract with the following command:

```
npx hardhat --network ropsten run scripts/deploy.js
```

You should get this message if everything is ok:

```
Contract deployed to address: <your-contract-address>
```

Now go ahead and upload your NFT image to Pinata! You will get a reference number to it, called CID, which you can place in the appropriate place in the `metadata.json` file. Upload this file to Pinata as well and grab its CID.

Let's add the following information to the `.env` file:

```
CONTRACT_ADDRESS=<your-contract-address> 
METADATA_CID=<metadata-cid>
```

We are now ready to mint our NFT, so just run:

```
npx hardhat --network ropsten run scripts/mint-nft.js
```

You should now get the following output:

```
Transaction hash:  
<your-transaction-hash> 
Check Alchemy's Mempool to view the status of your transaction!
```

You can open now your Metamask wallet and follow the link to check the transaction status in Etherscan. Also, you will be able to import the NFT into your wallet!

## **4. Next Steps**

Here are some thoughts about what can be improved in this project:

- Adding automatic tests
- Interacting to Pinata via API instead of via UI
- Deploy this project in Ethereum Mainet
- Change the ownership of the smart contract, so anyone can use it to mint NFTs.