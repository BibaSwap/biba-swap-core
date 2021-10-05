const Factory = artifacts.require("BibaSwapFactory");

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
};
