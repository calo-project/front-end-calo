const { expect } = require("chai");
const { ethers } = require("hardhat");

const NAME = "CaloToken";
const SYMBOL = "CALO";

const EVENT_NAME = "Jember Fest";
const EVENT_COST = ethers.utils.parseUnits("1", "ether");
const EVENT_TICKETS = 100;
const EVENT_MAX_TICKETS = 100;
const EVENT_DATE = "22-02-2025";
const EVENT_TIME = "10:00 WIB";
const EVENT_LOCATION = "Jember";

describe(NAME, () => {
  let caloToken;
  let deployer, buyer;

  beforeEach(async () => {
    [deployer, buyer] = await ethers.getSigners();
    const CaloToken = await ethers.getContractFactory(NAME);
    caloToken = await CaloToken.deploy(NAME, SYMBOL);

    const transaction = await caloToken
      .connect(deployer)
      .list(
        EVENT_NAME,
        EVENT_COST,
        EVENT_TICKETS,
        EVENT_MAX_TICKETS,
        EVENT_DATE,
        EVENT_TIME,
        EVENT_LOCATION
      );

    await transaction.wait();
  });

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

  describe("Event", () => {
    it(`Update total event`, async () => {
      const totalCaloEvent = await caloToken.totalCaloEvent();
      expect(totalCaloEvent).to.be.equal(1);
    });

    it(`Returns event params`, async () => {
      const caloevent = await caloToken.getCaloEvent(1);
      expect(caloevent.id).to.be.equal(1);
      expect(caloevent.name).to.be.equal(EVENT_NAME);
      expect(caloevent.cost).to.be.equal(EVENT_COST);
      expect(caloevent.tickets).to.be.equal(EVENT_TICKETS);
      expect(caloevent.maxTickets).to.be.equal(EVENT_MAX_TICKETS);
      expect(caloevent.date).to.be.equal(EVENT_DATE);
      expect(caloevent.time).to.be.equal(EVENT_TIME);
      expect(caloevent.location).to.be.equal(EVENT_LOCATION);
    });
  });

  describe("Buy", () => {
    const ID = 1;
    const AMOUNT = ethers.utils.parseUnits('1', 'ether');
    beforeEach(async () => {
        const transaction = await caloToken.connect(buyer).mint(ID, { value: AMOUNT });
        await transaction.wait();
    });

    const totalSupply = EVENT_TICKETS - 1;

    it(`Update total ticket to ${totalSupply}`, async () => {
        const caloevent = await caloToken.getCaloEvent(1);
        expect(caloevent.tickets).to.be.equal(totalSupply);
    });

    it(`Update buying status`, async () => {
        const status = await caloToken.hasBought(ID, buyer.address);
        expect(status).to.be.equal(true);
    });

    it(`Update contract balance`, async () => {
        const balance = await ethers.provider.getBalance(caloToken.address);
        expect(balance).to.be.equal(AMOUNT);
    });
  });

  describe("Cancel", () => {
    const ID = 1;
    const AMOUNT = ethers.utils.parseUnits("1", "ether");

    beforeEach(async () => {
      const transaction = await caloToken.connect(buyer).mint(ID, { value: AMOUNT });
      await transaction.wait();
    });
  
    it("Updates total tickets", async () => {
      await caloToken.connect(buyer).cancel(ID);
      const caloevent = await caloToken.getCaloEvent(ID);
      expect(caloevent.tickets).to.be.equal(EVENT_TICKETS);
    });
  
    it("Updates buying status", async () => {
      await caloToken.connect(buyer).cancel(ID);
      const status = await caloToken.hasBought(ID, buyer.address);
      expect(status).to.be.equal(false);
    });
  
    it("Issues refund to buyer", async () => {
      const initialBalance = await ethers.provider.getBalance(buyer.address);
  
      const transaction = await caloToken.connect(buyer).cancel(ID);
      const receipt = await transaction.wait();
      const gasUsed = receipt.gasUsed.mul(receipt.effectiveGasPrice);
  
      const finalBalance = await ethers.provider.getBalance(buyer.address);
      expect(finalBalance).to.be.closeTo(initialBalance.add(AMOUNT).sub(gasUsed), ethers.utils.parseUnits("0.001", "ether"));
    });
  
    it("Updates contract balance", async () => {
      await caloToken.connect(buyer).cancel(ID);
      const balance = await ethers.provider.getBalance(caloToken.address);
      expect(balance).to.be.equal(0);
    });
  });

  describe("Withdraw", () => {
    const ID = 1
    const SEAT = 50
    const AMOUNT = ethers.utils.parseUnits("1", 'ether')
    let balanceBefore

    beforeEach(async () => {
      balanceBefore = await ethers.provider.getBalance(deployer.address)

      let transaction = await caloToken.connect(buyer).mint(ID, { value: AMOUNT })
      await transaction.wait()

      transaction = await caloToken.connect(deployer).withdraw()
      await transaction.wait()
    })

    it('Updates the owner balance', async () => {
      const balanceAfter = await ethers.provider.getBalance(deployer.address)
      expect(balanceAfter).to.be.greaterThan(balanceBefore)
    })

    it('Updates the contract balance', async () => {
      const balance = await ethers.provider.getBalance(caloToken.address)
      expect(balance).to.equal(0)
    })
  });
});
