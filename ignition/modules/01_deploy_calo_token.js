import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("CaloTokenDeployment", (m) => {
  const name = m.getParameter("name", "CaloToken");
  const symbol = m.getParameter("symbol", "CALO");

  const deployer = m.namedAccounts.deployer;

  const caloToken = m.deploy("CaloToken", {
    from: deployer,
    args: [name, symbol],
  });

  return { caloToken };
});
