async function main() {
  const DeadmanSwitch = await ethers.getContractFactory("DeadmanSwitch");

  // Start deployment, returning a promise that resolves to a contract object
  const deadman_switch = await DeadmanSwitch.deploy();
  console.log("Contract deployed to address:", deadman_switch.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
