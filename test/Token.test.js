const ghmcToken = artifacts.require("Token");
require('dotenv').config({ path: '../.env' });

const chai = require("./chaisetup.js");
const BN = web3.utils.BN;
//const expect = chai.expect;

const chaiBN = require('chai-bn')(BN);
chai.use(chaiBN);

//var chaiAsPromised = require("chai-as-promised");
//chai.use(chaiAsPromised);

const expect = chai.expect;

contract("Token Test", function (accounts) {
    const [initialHolder, recipient, anotherAccount] = accounts;

    beforeEach(async () => {
        this.ghmcToken = await ghmcToken.new(process.env.INITIAL_TOKENS);
    });

    it("All tokens should be in my account", async () => {
        let instance = this.ghmcToken;
        let totalSupply = await instance.totalSupply();
        return expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply);
    });

    it("is possible to send tokens between accoutns", async () => {
        const sendTokens = 1;
        let instance = this.ghmcToken;
        let totalSupply = await instance.totalSupply();
        expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply);
        expect(instance.transfer(recipient, sendTokens)).to.eventually.be.fulfilled;
        expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN(sendTokens)));
        return expect(instance.balanceOf(recipient)).to.eventually.be.a.bignumber.equal(new BN(sendTokens));

    });

    it("is not possible to send more tokens than available in total", async () => {
        let instance = this.ghmcToken;
        let balanceOfDeployer = await instance.balanceOf(initialHolder);
        expect(instance.transfer(recipient, new BN(balanceOfDeployer + 1))).to.eventually.be.fulfilled;
        return expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(balanceOfDeployer);

    });

});