const { expect } = require("chai");
const { ethers } = require("hardhat");

const NAME = "CaloToken";
const SYMBOL = "CALO";

const EVENT_NAME = "Jember Fest";
const EVENT_COST = ethers.utils.parseUnits("1", "ether");
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
      expect(caloevent.maxTickets).to.be.equal(EVENT_MAX_TICKETS);
      expect(caloevent.date).to.be.equal(EVENT_DATE);
      expect(caloevent.time).to.be.equal(EVENT_TIME);
      expect(caloevent.location).to.be.equal(EVENT_LOCATION);
    });
  });
});
