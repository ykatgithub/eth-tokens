var token = artifacts.require("./Token.sol");
var ghmcTokenSales = artifacts.require("./GHMCTokenSale.sol");
var KycContract = artifacts.require("./KycContract.sol");
require('dotenv').config({path: '../.env'});


module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(token, process.env.INITIAL_TOKENS);
    await deployer.deploy(KycContract);
    await deployer.deploy(ghmcTokenSales, 1, addr[0], token.address, KycContract.address);
    let tokenInstance = await token.deployed();
    await tokenInstance.transfer(ghmcTokenSales.address, process.env.INITIAL_TOKENS);
};