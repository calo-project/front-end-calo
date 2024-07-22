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
      name: "Ariana Grande",
      cost: tokens(3),
      tickets: 0,
      maxTickets: 0,
      date: "22, Mei 2024",
      time: "6:00PM WIB",
      location: "Alun-alun Kota - Solo",
      slug: "infokan123",
      vendorAddress: "0x479ba4d0bfeb7ea12b39cc97b66d598f1ee2d15e59c4188371724113e7db7296"
    },
    {
      name: "Joji",
      cost: tokens(1),
      tickets: 125,
      maxTickets: 125,
      date: "22 Juli 2024",
      time: "1:00PM WIB",
      location: "Alun-alun Kota - Klaten",
      slug: "infokan123",
      vendorAddress: "0x479ba4d0bfeb7ea12b39cc97b66d598f1ee2d15e59c4188371724113e7db7296"
    },
    {
      name: "Bilie Eilish",
      cost: tokens(0.25),
      tickets: 200,
      maxTickets: 200,
      date: "22 Juni 2024",
      time: "10:00AM WIB",
      location: "Alun-alun Kota - Ngawi",
      slug: "infokan123",
      vendorAddress: "0x479ba4d0bfeb7ea12b39cc97b66d598f1ee2d15e59c4188371724113e7db7296"
    },
    {
      name: "Bernadya",
      cost: tokens(5),
      tickets: 0,
      maxTickets: 10,
      date: "10 Agustus 2024",
      time: "2:30PM WIB",
      location: "Alun-alun Kota - Karawang",
      slug: "infokan123",
      vendorAddress: "0x479ba4d0bfeb7ea12b39cc97b66d598f1ee2d15e59c4188371724113e7db7296"
    },
    {
      name: "Guyon Waton",
      cost: tokens(1.5),
      tickets: 125,
      maxTickets: 125,
      date: "19 September 2024",
      time: "11:00AM WIB",
      location: "Alun-alun Kota - Jember",
      slug: "infokan123",
      vendorAddress: "0x479ba4d0bfeb7ea12b39cc97b66d598f1ee2d15e59c4188371724113e7db7296"
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
      events[i].slug,
      events[i].vendorAddress,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${events[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});