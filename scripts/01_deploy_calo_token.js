import hre from "hardhat"

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  const [deployer] = await ethers.getSigners()
  const NAME = "CaloToken"
  const SYMBOL = "CALO"

  const CaloToken = await ethers.getContractFactory("CaloToken")
  const calotoken = await CaloToken.deploy(NAME, SYMBOL)
  await calotoken.deployed()

  console.log(`Deployed Calo Token Contract at: ${calotoken.address}\n`)

  const events = [
    {
      name: "UFC Miami",
      cost: tokens(3),
      tickets: 0,
      maxTickets: 0,
      date: "May 31",
      time: "6:00PM EST",
      location: "Miami-Dade Arena - Miami, FL"
    },
    {
      name: "ETH Tokyo",
      cost: tokens(1),
      tickets: 125,
      maxTickets: 125,
      date: "Jun 2",
      time: "1:00PM JST",
      location: "Tokyo, Japan"
    },
    {
      name: "ETH Privacy Hackathon",
      cost: tokens(0.25),
      tickets: 200,
      maxTickets: 200,
      date: "Jun 9",
      time: "10:00AM TRT",
      location: "Turkey, Istanbul"
    },
    {
      name: "Dallas Mavericks vs. San Antonio Spurs",
      cost: tokens(5),
      tickets: 0,
      maxTickets: 10,
      date: "Jun 11",
      time: "2:30PM CST",
      location: "American Airlines Center - Dallas, TX"
    },
    {
      name: "ETH Global Toronto",
      cost: tokens(1.5),
      tickets: 125,
      maxTickets: 125,
      date: "Jun 23",
      time: "11:00AM EST",
      location: "Toronto, Canada"
    }
  ]

  for (var i = 0; i < 5; i++) {
    const transaction = await calotoken.connect(deployer).list(
      events[i].name,
      events[i].cost,
      events[i].tickets,
      events[i].maxTickets,
      events[i].date,
      events[i].time,
      events[i].location,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${events[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});