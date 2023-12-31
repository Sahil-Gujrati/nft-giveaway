<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![codecov](https://codecov.io/gh/Sahil-Gujrati/nft-giveaway/graph/badge.svg?token=NOAIIBRO3B)](https://codecov.io/gh/Sahil-Gujrati/nft-giveaway)

<div align="center">

<br />

<h1 align="center">NFT Giveaway</h3>

  <p align="center">
    A giveaway smart contract where anyone can join in to have a fair chance at winning an awesome NFT
    <br />
    <a href="https://github.com/Sahil-Gujrati/nft-giveaway/blob/main/docs"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/Sahil-Gujrati/nft-giveaway/issues">Report Bug</a>
    ·
    <a href="https://github.com/Sahil-Gujrati/nft-giveaway/issues">Request Feature</a>
    
  </p>
</div>

<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Giveaways are a form of expression of love of creators/influencers towards their community and supporters. Hundreds of giveaways occur every month, and thousands of people join in to have a shot at getting a console, PC, movie tickets, a pair of those shining new sneakers and what not.

Making the process of selecting a winner for the giveaway decentralized and devoid of any bias or tampering is a difficult task. That's where blockchain technology comes to the rescue! Using Chainlink's VRF service, which provides verifiable random numbers, we can pick a truly random winner. Everything is carried out on-chain with smart contracts - entering the giveaway, picking a winner, and even sending him/her the prize!

When the winner is selected, an NFT (Non-Fungible Token) is minted to him/her. The NFT can be representative of physical assets - such as a pair of sneakers - and hold information about its current state in its metadata! The winner gets two prizes, first, his/her sneakers, and second, the NFT! The NFT can even be burnt after the winner gets the sneakers delivered to him/her, ensuring that the prize was claimed successfully.

This project allows anyone to configure and create a giveaway of their own on EVM compatible chains. Though this project is well tested and documented, it hasn't been audited yet, so please don't deploy it on the mainnet! Keep your giveaways restricted to testnets only, if you intend to use this project.

If you want to see the full list of giveaway smart contract functions and their descriptions, navigate to `./docs/index.html`. Open the index.html page in a browser to view the documentation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- ![Hardhat][hardhat-url]
- ![JavaScript][javascript-url]
- ![Solidity][solidity-url]
- ![Ethereum][ethereum-url]
- ![npm][npm-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Make sure you have node.js and git installed and configured on your system. Also, you need to have a MetaMask account (preferably two) with sufficient ETH, and LINK tokens. If you are using the Sepolia testnet, you can get Sepolia testnet ETH from [Alchemy](https://sepoliafaucet.com/) and LINK tokens from [Chainlink faucet](https://faucets.chain.link/).

### Installation

Clone this repository

```shell
git clone https://github.com/Sahil-Gujrati/nft-giveaway.git
```

Cd into the project folder and install the dependencies

```shell
npm install
```

Depending on the network you want to deploy the giveaway to (I highly advise against deploying on mainnet), you'll need the following values:

- RPC URL: you can get this from [Alchemy](https://www.alchemy.com/) or [Infura](https://www.infura.io/) for any of your preferred testnet
- Private key for one of your accounts: create your MetaMask wallet and get your private key from there, this private key will be used to deploy the contract and fund it with LINK tokens. Ensure that it has enough ETH and LINK balance
- Private key for another account: optional
- NFT metadata hash: you'll need to upload your NFT metadata to IPFS and get its hash
- Etherscan and CoinMarketCap api keys: optionally, you can get the [etherscan api key](https://docs.etherscan.io/getting-started/creating-an-account) and [coinmarketcap api key](https://coinmarketcap.com/api/). The former will let you verify contracts on etherscan, and the latter will provide you with gas reports with gas consumed in your preferred currency that you may set in the `hardhat.config.js` file's gasReport section.

Set these values correctly in the `.env.example` file in the top level of the project, and rename the file to `.env`, and bring them in your `hardhat.config.js` file. An example configuration for the Sepolia testnet is given in the same file.

You'll also need to configure the `helper.config.js` file. Make sure you have the ID of the testnet you're deploying to.
In the networkConfig object in `helper.config.js`, add the testnet ID as the key, and add the object containing configuration details as the value for the testnet ID. You'll need:

- name: name of the testnet
- blockConfirmations: the number of blocks you want to wait during deployment (6 is generally a good number)
- keyHash: the amount of gas you want to spend on each random word request
- callbackGasLimit: the maximum gas limit for fulfillRandomWords function
- interval: the time in seconds after which to pick a winner
- vrfCoordinatorAddress: the address of Chainlink's VRFCoordinator for your preferred testnet
- linkTokenAddress: the address of the LINK token contract for your preferred document
- upkeepContractAddress: the address of the Chainlink registrar for your preferred network
- fundLinkAmountForSubscription: the amount of LINK tokens to fund the subscription ID dynamically created by the contract on deployment
- fundLinkAmountForUpkeep: the amount of LINK tokens to fund the upkeep

An example configuration for the Sepolia testnet (ID: 11155111) is given in the `helper.config.js` file. You can get more details about these values at [Chainlink VRF docs](https://docs.chain.link/vrf) and [Chainlink Automation docs](https://docs.chain.link/chainlink-automation).

After you have configured the `helper.config.js` and `hardhat.config.js` files, deploy the giveaway contract

```shell
npx hardhat run scripts/deploy.js --network <network-name>
```

The contract will create a subscription and add itself as a consumer. The deployment script will fund the subscription and the upkeep. Sit back, relax, and watch.

That's it. The giveaway should be up and running, and people can join in! Wait to find out who's the winner!

After the giveaway has ended, you can use the removeGiveawayFromConsumers(), cancelSubscription(), and withdraw() methods to clean up and claim the remaining LINK tokens. You can use the cleanup task for that:

```shell
npx hardhat Cleanup --address "YOUR_DEPLOYED_GIVEAWAY'S_ADDRESS" --network <network-name>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [x] Create the NFT smart Contract
-   [x] Create the Giveaway smart Contract
-   [x] Write deployment scripts
-   [x] Carry out unit testing
-   [x] Write documentation and generate docs
-   [x] Write a good README.md

See the [open issues](https://github.com/Sahil-Gujrati/nft-giveaway/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Check out [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for contribution guidelines.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Sahil Gujrati - sahilgujrati12@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Sahil-Gujrati/nft-giveaway.svg?style=for-the-badge
[contributors-url]: https://github.com/Sahil-Gujrati/nft-giveaway/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Sahil-Gujrati/nft-giveaway.svg?style=for-the-badge
[forks-url]: https://github.com/Sahil-Gujrati/nft-giveaway/network/members
[stars-shield]: https://img.shields.io/github/stars/Sahil-Gujrati/nft-giveaway.svg?style=for-the-badge
[stars-url]: https://github.com/Sahil-Gujrati/nft-giveaway/stargazers
[issues-shield]: https://img.shields.io/github/issues/Sahil-Gujrati/nft-giveaway.svg?style=for-the-badge
[issues-url]: https://github.com/Sahil-Gujrati/nft-giveaway/issues
[license-shield]: https://img.shields.io/github/license/Sahil-Gujrati/nft-giveaway.svg?style=for-the-badge
[license-url]: https://github.com/Sahil-Gujrati/nft-giveaway/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/sahil-gujrati-125ab0284
[hardhat-url]: https://img.shields.io/badge/-HARDHAT-%23323330.svg?style=for-the-badge&logo=data:image/png;base64,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
[javascript-url]: https://img.shields.io/badge/Javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[solidity-url]: https://img.shields.io/badge/-solidity-363636?logo=solidity&logoColor=white&style=for-the-badge
[ethereum-url]: https://img.shields.io/badge/-ethereum-3C3C3D?logo=ethereum&logoColor=white&style=for-the-badge
[npm-url]: https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white&style=for-the-badge
