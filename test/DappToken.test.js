const { expect } = require('chai');
const { BN } = require('@openzeppelin/test-helpers');

const DappToken = artifacts.require('DappToken');


contract('DappToken', function(accounts) {
    const name = 'Dapp Token';
    const symbol = 'DAPP';
    beforeEach(async function () {
        this.token = await DappToken.new(name, symbol);
      });

    describe('token attributes', function () {
        it('has the correct name', async function () {
            expect(await this.token.name()).to.equal(name);
        });
        it('has the correct symbol', async function () {
            expect(await this.token.symbol()).to.equal(symbol);
        });
        it('has 18 decimals', async function () {
            expect(await this.token.decimals()).to.be.bignumber.equal('18');
        });
    });
});