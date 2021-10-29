A. Setting up Dev Environmment:
-------------------------------
Step 1: Install Node.js and Npm
•	Open the official page for Node.js downloads and download Node.js for Windows by clicking the "Windows Installer" option.
•	Link: https://nodejs.org
•	Run the downloaded Node.js .msi Installer - including accepting the license, selecting the destination, and authenticating for the install.
•	To ensure Node.js has been installed, run node -v in your terminal.

D:\learning\bits-wilp\SEM3\Blockchain\labs\eth-tokens>node -v
v16.11.0

D:\learning\bits-wilp\SEM3\Blockchain\labs\eth-tokens>npm -v
8.0.0

Install Solidity:
After successful instalation of NodeJs and NPM, run below to install solidity
> npm install -g solc

Verify the version to see whether it installed, alright.
solcjs --version


Step 4: Install Truffle
Truffle is a development environment and testing framework that makes building Ethereum Dapps easier and provides you the necessary nuggets for smart contracts manipulation.Open node.js command prompt and paste the following command in the prompt to install Truffle.
> npm install -g truffle

After the download is complete, type “truffle version” on node terminal to verify that truffle is successfully installed.

Step 5: Other Dependecies:
openzeppelin contracts
truffle/hdwallet-provider
chai
chai-as-promised
chai-bn
dotenv

All these are installed to package.json(as part of project setup) so gets this pagckages will get installed into run-time environment when we run npm run start.

To work this project on your local environment and deploy below should be the required pagckages with respective versions
D:\learning\bits-wilp\SEM3\Blockchain\labs\eth-tokens>truffle version
Truffle v5.4.15 (core: 5.4.15)
Solidity - ^0.6.0 (solc-js)
Node v16.11.0
Web3.js v1.5.3

B. Setup Ganache and Metamask:
------------------------------

Step 1: Install Ganache
Ganache is personal blockchain for building distributed applications with Ethereum. It gives you 10 free accounts with 100 fake ethers each for testing purposes.

Download Ganache from https://www.trufflesuite.com/ganache
Place the download file in suitable path and give execute permissions
Eg: chmod a+x ganache-1.1.0-x86_64.AppImage

Start Ganache 

New Workspace -> getting strated(ethereum). 
Name the workspace
Save workspace

Step 2: Install Metamask
Metamask extension for firefox or chrome makes it easier to interact with DApp by making browser acts like an Ethereum Wallet. Get the extension suitable for your browser from here: https://metamask.io/

Now click on “Import Wallet” and paste the seed phrase you have in MNEMONIC of your Ganache. workspace. Now setup your password and proceed.

Currently we have 0 Ethers in our account. Now we are going to connect metmask with Ganache to have fake ethers reflected in metamask. For that purpose chose “Custom RPC” from the drop down.

Modify the network (blockchain) you want to connect:

Drop down the list from top right corner (network : default showing Ethereum main net) and select Custom RPC

Now click on LocalHost 8545 then modify the port as 7545 (where ganache is available).

Copy the RPC server URL from Ganache and paste it into New RPC URL in Networks Tab and click Save.

C. Setup Runtime pre-requisites:
--------------------------------
1. Create custom network
Open truffle-config.js and update networks as below
 ganache_local: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", MetaMaskAccountIndex)
      },
      network_id: 5777
    }
	
2. Set Solidity verion to compile the project
Open truffle-config.js and add compilers as below
compilers: {
    solc: {
      version: "^0.6.0"
    }
}

Note: C.1, C.2 are for information, these pre-exists in the project.

3. set Properties in .env
In order to get contracts working please input below in .env file
INITIAL_TOKENS as 10000

MNEMONIC as <<Your Secrete / seed phrase that you noted while creating metamask account>> Refer B.2

D. How to run the project:
--------------------------
•	Source Code:
Download Source Code: <<From_Location>> and explore.
Change directory to your project location.
Note: The paths listed in this document changes in accordance with your poject directory.

•	Install Dependecies in package.json:
D:\learning\bits-wilp\SEM3\Blockchain\labs\eth-tokens>npm install

•	Compile:
D:\learning\bits-wilp\SEM3\Blockchain\labs\eth-tokens>truffle compile

•	Deploy:
truffle migrate --network ganache_local

•	Client:
D:\learning\bits-wilp\SEM3\Blockchain\labs\eth-tokens\client> npm run start





