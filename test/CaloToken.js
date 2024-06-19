const { expect } = require("chai");
const { ethers } = require("hardhat");

const NAME = "CaloToken";
const SYMBOL = "CALO";

describe(NAME, () => {
    let caloToken;
    let deployer, buyer;

    beforeEach(async () => {
        [deployer, buyer] = await ethers.getSigners()
        const CaloToken = await ethers.getContractFactory(NAME);
        caloToken = await CaloToken.deploy(NAME, SYMBOL);
    })

    describe("Deployment", () => {
        it(`Set name of Token: ${NAME} `, async () => {
            expect(await caloToken.name()).to.equal(NAME);
        });

        it(`Set symbol of Token: ${SYMBOL}`, async () => {
            expect(await caloToken.symbol()).to.equal(SYMBOL);
        });

        it(`Set the owner`, async () => {
            expect(await caloToken.owner()).to.equal(deployer.address);
        });
    });
});
